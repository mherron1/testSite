if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service_worker.js")
    .then((reg) => console.log())
    .catch((err) => console.log());
}

let android = false;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if (isAndroid) {
  android = true;
}

if (localStorage.getItem("dark-mode") !== null) {
  if (localStorage.getItem("dark-mode") === "y") {
    let darkMode = document.querySelector("#darkInput");
    darkMode.checked = true;
    toggleStyleSheets();
  }
} else {
  /*
    let darkMode = document.querySelector("#darkInput");
    darkMode.checked = true;
    toggleStyleSheets();
    */
}

let oddsType = "line";
let showResults = false;

if (localStorage.getItem("oddsType") !== null) {
  if (localStorage.getItem("oddsType") === "decimal") {
    oddsType = "dec";
    let oddsTypeToggle = document.querySelector("#oddsTypeToggle");
    oddsTypeToggle.checked = true;
  }
}

let i = 0;
let events = data2;
let notFirst = true;
let notLast = true;

create();

function create(search_string) {
  events = data2;
  let numRes = 0;
  let filterArr = [];
  if (localStorage.getItem("ufc") !== null) {
    if (localStorage.getItem("ufc") === "y") {
      filterArr.push("Ultimate");
      document.querySelector("#ufcInput").checked = true;
      numRes += 1;
    }
    if (localStorage.getItem("ufc") === "y") {
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
    filterArr.push("Ultimate");
    filterArr.push("Bellator");
    filterArr.push("Professional");
    filterArr.push("ONE");
    document.querySelector("#ufcInput").checked = true;
    numRes += 1;

    events = events.filter((event) => {
      for (p = 0; p < filterArr.length; p++) {
        if (event[0].includes(filterArr[p])) {
          return true;
        }
      }
    });
  }

  for (let q = 0; q < numRes; q++) {
    events.push(events.shift());
  }

  if (i === events.length - numRes) {
    document.querySelector("#leftArrow").style.display = "none";
    notFirst = false;
  } else {
    document.querySelector("#leftArrow").style.display = "block";
    notFirst = true;
  }
  if (i === events.length - (numRes + 1)) {
    document.querySelector("#rightArrow").style.display = "none";
    notLast = false;
  } else {
    document.querySelector("#rightArrow").style.display = "block";
    notLast = true;
  }

  var highestTimeoutId = setTimeout(";");
  for (var k = 0; k < highestTimeoutId; k++) {
    clearTimeout(k);
  }

  resetDivCSS();
  generateCard(i - 1, "Minus1");
  generateCard(i + 1, "Plus1");
  generateCard(i, "");

  searchHightlight(search_string);

  function searchHightlight(search_string) {
    let searched = search_string;
    if (searched) {
      let text = document.getElementById("mainCard").innerHTML;
      let re = new RegExp(searched, "g"); // search for all instances
      let newText = text.replace(
        re,
        `<mark style="background-color:rgba(244, 247, 118, 1);">${searched}</mark>`
      );
      document.getElementById("mainCard").innerHTML = newText;
      text = document.getElementById("prelimsCard").innerHTML;
      re = new RegExp(searched, "g"); // search for all instances
      newText = text.replace(
        re,
        `<mark style="background-color:rgba(244, 247, 118, 1);">${searched}</mark>`
      );
      document.getElementById("prelimsCard").innerHTML = newText;
    }
  }
}

let fighterArray = [];
events.forEach((ev, index) => {
  ev[3].forEach((bout) => {
    fighterArray.push({
      fighter: bout.fighterA,
      date: ev[7],
      index: index,
    });
    fighterArray.push({
      fighter: bout.fighterB,
      date: ev[7],
      index: index,
    });
  });
});

////////////////////////////////  End of card function

function next() {
  showResults = false;
  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.width === "325px") {
    $("#hamburger-1").toggleClass("is-active");
    eventList.innerHTML = ``;
    sideNav.style.width = "0%";
    $("#dim").fadeOut(200);
  }

  if (notLast) {
    i++;
    if (i === events.length) {
      i = 0;
    }
    create();
  }
}
function back() {
  showResults = false;
  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.width === "325px") {
    $("#hamburger-1").toggleClass("is-active");
    eventList.innerHTML = ``;
    sideNav.style.width = "0%";
    $("#dim").fadeOut(200);
  }

  if (notFirst) {
    i--;
    if (i < 0) {
      i = events.length - 1;
    }
    create();
  }
}
function toggleD() {
  /////////////////////
  vibrate();
  ///////////////////////
  console.log("test");

  let detailsLeft = document.querySelectorAll(`.detailsLeft`);
  detailsLeft.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";

      mainTime.textContent = `Main: ${mainCardTime}`;

      mainTime.innerHTML += `
        <i class="material-icons noSelect" id="expandMore" onclick="toggleD()">expand_more</i>
         `;
    } else {
      detail.style.display = "flex";

      mainTime.textContent = `Main: ${mainCardTime}`;

      mainTime.innerHTML += `
        <i class="material-icons noSelect" id="expandMore" onclick="toggleD()">expand_less</i>
         `;
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
  /////////////////////
  vibrate();
  ///////////////////////
  let sideNav = document.querySelector("#sideNav");

  if (screen.width < 1000) {
    if (sideNav.style.width === "325px") {
      $("#hamburger-1").toggleClass("is-active");
      $("#top_right").css("z-index", 1000);
      $("#top_left").css("z-index", 1000);
      eventList.innerHTML = ``;
      sideNav.style.width = "0%";
      $("#dim").fadeOut(200);
    } else {
      $("#hamburger-1").toggleClass("is-active");
      $("#top_right").css("z-index", 0);
      $("#top_left").css("z-index", 0);
      sideNav.style.width = "325px";
      $("#dim").fadeIn(400);
      generateLinks();
    }
  }
}

//////////////////////////// Navigation Links

function generateLinks() {
  let eventList = document.querySelector("#eventList");
  eventList.innerHTML = `
    <i class="material-icons" id ="settingsIcon" onclick="toggleSettings()">settings</i>
    
    `;

  let eventLimit = events.length;
  if (events.length > 25) {
    eventLimit = 25;
  }

  for (let i = 0; i < eventLimit; i++) {
    let nowEpoch = new Date().getTime();
    if (new Date(events[i][1]) - nowEpoch > delay) {
      let dateString = new Date(events[i][1] - 18000000).toString();

      let org = "ufc";

      if (events[i][0].includes("Bell")) {
        org = "bellator";
      }
      if (events[i][0].includes("Prof")) {
        org = "pfl";
      }
      if (events[i][0].includes("ONE")) {
        org = "one";
      }
      if (events[i][4].includes("Paul")) {
        org = "special";
      }

      let date = `${dateString.split(" ")[1]} ${dateString.split(" ")[2]}`;
      eventList.innerHTML += `  
          <div class="eventLink" onclick="selectCard(${i})">
             <div class="eventLinkDate">${date}</div>
              <img src="images/icons/${org}Icon.jpg" class="eventIcons"/>  
          
             <div class="eventLinkText">${events[i][4]}</div>
          </div>
      `;
    }
  }
  eventList.innerHTML += `<br>`;
  eventList.innerHTML += `<h4 style = "margin-top: 12px;" class = "eventLink">Recent Events</h4>`;
  for (let i = events.length - 1; i >= 0; i--) {
    let nowEpoch = new Date().getTime();
    if (new Date(events[i][1]) - nowEpoch < delay) {
      let dateString = new Date(events[i][1] - 18000000).toString();

      let org = "ufc";

      if (events[i][0].includes("Bell")) {
        org = "bellator";
      }
      if (events[i][0].includes("Prof")) {
        org = "pfl";
      }
      if (events[i][0].includes("ONE")) {
        org = "one";
      }

      let date = `${dateString.split(" ")[1]} ${dateString.split(" ")[2]}`;
      eventList.innerHTML += `  
          <div class="eventLink" onclick="selectCard(${i})">
             <div class="eventLinkDate">${date}</div>
              <img src="images/icons/${org}Icon.jpg" class="eventIcons"/>  
          
             <div class="eventLinkText">${events[i][4]}</div>
          </div>
      `;
    }
  }
  eventList.innerHTML += `<br><br><br><br><br><br><br>`;
}

let sideNav = document.querySelector("#sideNav");
sideNav.ontransitionstart = () => {
  $(".eventLinkDate").css("opacity", "1");
  $(".eventLink").css("opacity", "1");
};

function selectCard(index) {
  toggleSideNav();
  i = index;
  /////////////////////
  vibrate();
  ///////////////////////
  pausecomp(50);
  showResults = false;
  create();

  document.querySelector("#hamburger-1").classList = "hamburger";
  window.scrollTo(0, 0);
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

const touchMove = (evt) => {
  touch = evt.touches[0];
  var changeX = startingX - touch.clientX;
  let percentSwipe = (changeX / screen.width) * 50;
  if (percentSwipe > 50) {
    percentSwipe = 50;
  }
  if (changeX > 50 && notLast) {
    swiping = true;
    changeX -= 50;
    content1.style.left = -changeX + "px";
    contentPlus1.style.left = "100vw";
    contentPlus1.style.display = "block";
    contentPlus1.style.left = +screen.width - changeX + "px";
    evt.preventDefault();
  } else if (changeX < -50 && notFirst) {
    swiping = true;
    changeX += 50;
    content1.style.left = -changeX + "px";
    contentMinus1.style.left = "100vw";
    contentMinus1.style.left = "-100vw";
    contentMinus1.style.display = "block";
    contentMinus1.style.left = -screen.width - changeX + "px";
    evt.preventDefault();
  }
};

const touchEnd = (evt) => {
  var changeX = startingX - evt.changedTouches[0].clientX;
  var third = screen.width / 4;
  if (changeX < third && changeX > -third) {
    content1.style.transition = "0.4s";
    contentPlus1.style.transition = "0.4s";
    contentMinus1.style.transition = "0.4s";
    content1.style.left = "0";
    contentMinus1.style.left = "-100vw";
    contentPlus1.style.left = "100vw";
    setTimeout(() => {
      contentPlus1.style.display = "none";
      contentMinus1.style.display = "none";
      content1.style.transition = "0s";
      contentPlus1.style.transition = "0s";
      contentMinus1.style.transition = "0s";
    }, 201);
  } else if (changeX > 0 && notLast) {
    content1.style.transition = "0.2s";
    contentPlus1.style.transition = "0.2s";
    contentMinus1.style.transition = "0.2s";
    content1.style.left = -100 + "vw";
    contentPlus1.style.left = "0";
    setTimeout(() => {
      contentPlus1.style.display = "none";
      contentMinus1.style.display = "none";
      content1.style.transition = "0s";
      contentPlus1.style.transition = "0s";
      contentMinus1.style.transition = "0s";
      i++;
      if (i > events.length - 1) {
        i = 0;
      }
      showResults = false;
      create();
    }, 201);
  } else if (changeX < 0 && notFirst) {
    content1.style.transition = "0.2s";
    contentPlus1.style.transition = "0.2s";
    contentMinus1.style.transition = "0.2s";
    content1.style.left = 102 + "vw";
    contentMinus1.style.left = "0";

    setTimeout(() => {
      contentPlus1.style.display = "none";
      contentMinus1.style.display = "none";
      content1.style.transition = "0s";
      contentPlus1.style.transition = "0s";
      contentMinus1.style.transition = "0s";
      i--;
      if (i < 0) {
        i = events.length - 1;
      }
      swiping = false;
      showResults = false;
      create();
    }, 201);
  }
};
if (screen.width > 750) {
  generateDesktopLinks();
}

function generateDesktopLinks() {
  let desktopLinks = document.getElementById("desktopLinks");
  desktopLinks.innerHTML = `
  <br>  

  <i class="fa fa-search desktopSearchIcon" onclick="document.querySelector('#searchContainer').style.display='block';"  style="font-size:20px"></i>

  <i class="material-icons" id="desktopOpenSettings" onclick="toggleSettings()" style="font-size:20px">settings</i><br>

            <br>
  
      <h4 style = "margin-top: 12px;" class = "eventLink">Upcoming Events</h4>
      
      `;

  let eventLimit = events.length;
  if (events.length > 25) {
    eventLimit = 25;
  }

  for (let i = 0; i < eventLimit; i++) {
    let nowEpoch = new Date().getTime();
    if (new Date(events[i][1]) - nowEpoch > delay) {
      let dateString = new Date(events[i][1] - 18000000).toString();

      let org = "ufc";

      if (events[i][0].includes("Bell")) {
        org = "bellator";
      }
      if (events[i][0].includes("Prof")) {
        org = "pfl";
      }
      if (events[i][0].includes("ONE")) {
        org = "one";
      }
      if (events[i][4].includes("Paul")) {
        org = "special";
      }

      let date = `${dateString.split(" ")[1]} ${dateString.split(" ")[2]}`;
      desktopLinks.innerHTML += `  
            <div class="eventLink" onclick="selectCard(${i})">
               <div class="eventLinkDate">${date}</div>
                <img src="images/icons/${org}Icon.jpg" class="eventIcons"/>  
            
               <div class="eventLinkText">${events[i][4]}</div>
            </div>
        `;
    }
  }
  desktopLinks.innerHTML += `<br>`;
  desktopLinks.innerHTML += `<h4 style = "margin-top: 12px;" class = "eventLink">Recent Events</h4>`;
  for (let i = events.length - 1; i >= 0; i--) {
    let nowEpoch = new Date().getTime();
    if (new Date(events[i][1]) - nowEpoch < delay) {
      let dateString = new Date(events[i][1] - 18000000).toString();

      let org = "ufc";

      if (events[i][0].includes("Bell")) {
        org = "bellator";
      }
      if (events[i][0].includes("Prof")) {
        org = "pfl";
      }
      if (events[i][0].includes("ONE")) {
        org = "one";
      }

      let date = `${dateString.split(" ")[1]} ${dateString.split(" ")[2]}`;
      desktopLinks.innerHTML += `  
            <div class="eventLink" onclick="selectCard(${i})">
               <div class="eventLinkDate">${date}</div>
                <img src="images/icons/${org}Icon.jpg" class="eventIcons"/>  
            
               <div class="eventLinkText">${events[i][4]}</div>
            </div>
        `;
    }
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
  /////////////////////
  vibrate();
  ///////////////////////
  $("#hamburger-1").toggle();

  let hamburger = document.querySelector("#hamburger-1");

  let closeSettings = document.querySelector("#closeSettings");

  if (closeSettings.style.opacity === "1") {
    closeSettings.style.opacity = "0";
    closeSettings.style.right = "-58px";
  } else {
    closeSettings.style.opacity = "1";
    closeSettings.style.right = "12px";
  }

  let settingsDiv = document.querySelector("#settings");
  if (settingsDiv.style.height === "110%") {
    $("#settings").css("position", "absolute");
    $("#settings").css("height", "0vh");
    $("#settings").css("top", "100%");
    window.location = "/";
  } else {
    $("#settings").css("height", "110%");
    $("#settings").css("top", "-30px");
    $("#settings").css("bottom", "-30px");
    $("#settings").css("position", "fixed");
    toggleSideNav();
  }
}

function toggleStyleSheets() {
  /////////////////////
  vibrate();
  ///////////////////////

  let stylesheet = document.getElementById("pagestyle");
  if (stylesheet.href.toString().includes("style")) {
    document.getElementById("pagestyle").setAttribute("href", "dark.css");
  } else {
    document.getElementById("pagestyle").setAttribute("href", "style.css");
  }
}

function generateCard(i, arg) {
  let videos = [];
  if (i < 0) {
    i = events.length - 1;
  } else if (i > events.length - 1) {
    i = 0;
  }

  let broadcastStyle = "";

  if (events[i][6].length < 2) {
    broadcastStyle = "style = 'background-color: transparent; border:none;'";
  }

  let content = document.querySelector(`#content${arg}`);
  content.innerHTML = `
  <!--<button id="searchIcon" onclick="openSearchContainer()">
    <i class="fa fa-search"></i>
  </button>-->
  
  <h2 style="background-color:none" id="mainHeader${arg}"></h2>
  <div id="imageContainer${arg}">
  </div>
  <div id="mainTime${arg}"></div>
  <div id="mainCard${arg}"></div> 
  <div id="prelimsTime${arg}"></div>
  <div id="prelimsCard${arg}"></div> 
  <div id="videoGallery${arg}"></div>
  <div id="broadcastInfo" ${broadcastStyle}> ${events[i][6]}</div>
  <br>
  <br>
  <div style="text-align:center;" class="shareHolder">

        <a style="text-decoration:underline; font-size:14px;" href="https://twitter.com/intent/tweet?url=https://mmafightcards.org/" target="_blank">
          Share on Twitter
        </a>

  </div>




  
 <br>

 <div class="center-div">
    <button class="btn-style">Buy me a beer</button>
</div>


 <br>
 <br>
 <br>
 <br>
 <br>



  `;

  /*if (android === true) {
      content.innerHTML += `
      <div id="rateReview" style ="position:absolute; bottom:10px;right:15px; display: block;">
      <p><a href="https://play.google.com/store/apps/details?id=org.mmafightcards.twa" target="_blank">Rate & Review</a></p>
        </div>`;
    }*/

  let mainHeader = document.querySelector(`#mainHeader${arg}`);
  mainHeader.textContent += `${events[i][4]}`;

  mainHeader.innerHTML += `<div><span><i class="material-icons" id="shareIconTop" onclick="showShareButtons()">share</i></span></div>
    <i class="material-icons" id ="settingsIconTop" onclick="toggleSettings()">settings</i>`;

  ////////////event date
  var d = new Date();
  var utc_offset = d.getTimezoneOffset();

  let eventTimeLocal = new Date(events[i][1]);
  let mSecsPrelims = 1800000 * events[i][5];
  let prelimCardTime = new Date(eventTimeLocal - mSecsPrelims);

  times.forEach((item) => {
    let temp = events[i][7].split(" ").join("");

    if (temp.toLowerCase() === item.date && events[i][0] === item.promo) {
      if (item.time) {
        eventTimeLocal = item.time;
        prelimCardTime = item.prelims;
      }

      videos = item.videos;
    }
  });

  let mainTime = document.querySelector(`#mainTime${arg}`);
  let prelimsTime = document.querySelector(`#prelimsTime${arg}`);

  if (
    events[i][1] - nowEpochX < 604800000 &&
    events[i][1] - nowEpochX > -28800000
  ) {
    eventTimeLocal.setMinutes(eventTimeLocal.getMinutes() - utc_offset);
    mainCardTime = eventTimeLocal.toLocaleString([], {
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
  } else {
    eventTimeLocal.setMinutes(eventTimeLocal.getMinutes());
    mainCardTime = events[i][7];
  }

  mainTime.textContent = `Main: ${mainCardTime}`;

  mainTime.innerHTML += `
    <i class="material-icons noSelect" id="expandMore" onclick="toggleD()">expand_more</i>
     `;
  if (
    events[i][1] - nowEpochX < 604800000 &&
    events[i][1] - nowEpochX > -28800000
  ) {
    prelimCardTime.setMinutes(prelimCardTime.getMinutes() - utc_offset);
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
      prelimsTime.textContent = `Prelims`;
    }
  } else {
    prelimCardTime.setMinutes(prelimCardTime.getMinutes() - utc_offset);
    prelimsTime.textContent = `Prelims`;
  }

  ///////////////////////////////countdown

  let imageDiv = document.querySelector(`#imageContainer${arg}`);

  if (localStorage.getItem("countdown") != "n") {
    document.querySelector("#showHideCountdown").checked = true;

    let nowEpoch = new Date().getTime();
    if (new Date(events[i][1]) - nowEpoch > delay) {
      imageDiv.innerHTML += `
        
          <div id="testDiv${arg}" onclick="countdownToggle()">
            <div id="toggleContainer${arg}">
    
              <div id="countTogglePrelims${arg}">
              <i class="fa fa-exchange" id="toggleIcon2${arg}"></i>
                <p class="y"> Prelims</p>
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
    } else {
      if (showResults) {
        var resultsToggle = "checked";
      } else {
        var resultsToggle = "";
      }

      imageDiv.innerHTML += `
        <div id ="showResults" onclick="toggleResults()">
        <span style="margin-right:25px;padding-top:2px;">Results</span>
        <label class="switch">
          <input type="checkbox" class="show_results_checkbox" ${resultsToggle} onclick="toggleResults()">
          <span class="slider round"></span>
        </label>
        
        
        </div>
        <div id="testDiv${arg}" style = "visibility:hidden;" onclick="countdownToggle()">
  
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
    }

    if (arg === "") {
      setMainCountdown(eventTimeLocal);
      setPrelimsCountdown(prelimCardTime);
    }

    eventTimeLocal.setMinutes(eventTimeLocal.getMinutes() + utc_offset);
    prelimCardTime.setMinutes(prelimCardTime.getMinutes() + utc_offset);
  } else {
    eventTimeLocal.setMinutes(eventTimeLocal.getMinutes() + utc_offset);
    prelimCardTime.setMinutes(prelimCardTime.getMinutes() + utc_offset);
    let nowEpoch = new Date().getTime();
    if (new Date(events[i][1]) - nowEpoch < 0) {
      imageDiv.innerHTML += `
        <button id ="showResults" onclick="toggleResults()">Show/Hide Results</button>
        `;
    }
  }

  //////////////////////////////

  let odds_present = false;

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
          name1[2] === fighterA[2] &&
          name1[1] === fighterA[1] &&
          name1[0] === fighterA[0] &&
          name1[3] === fighterA[3] &&
          name1[name1.length - 1] === fighterA[fighterA.length - 1] &&
          name1[name1.length - 3] === fighterA[fighterA.length - 3]
        ) {
          leftOdds = item.odds;
        }
        if (
          name1[1] === fighterB[1] &&
          name1[0] === fighterB[0] &&
          name1[2] === fighterB[2] &&
          name1[3] === fighterB[3] &&
          name1[name1.length - 1] === fighterB[fighterB.length - 1] &&
          name1[name1.length - 3] === fighterB[fighterB.length - 3]
        ) {
          rightOdds = item.odds;
        }
      });
      if (leftOdds.toString() === "" || rightOdds.toString() === "") {
        leftOdds = "";
        rightOdds = "";
      } else {
        odds_present = true;

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
              colorA = "green ";
              colorB = "green ";
              rightOdds = "-110";
              leftOdds = "-110";
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
              colorA = "green";
              colorB = "green";
              rightOdds = "1.95";
              leftOdds = "1.95";
            }
          }
        }
      }
    }

    let snippetA = "";
    let snippetB = "";
    let snippetC = "";

    if (new Date(events[i][1]) - nowEpochX < 0) {
      events[i][3][j].rankA = "";
      events[i][3][j].rankB = "";
    } else {
      if (events[i][3][j].fighterA.length > 50) {
        let string = events[i][3][j].fighterA;
        let stringArr = string.split(" ");
        stringArr[0] = stringArr[0][0] + ".";
        events[i][3][j].fighterA = stringArr.join(" ");
      }
      if (events[i][3][j].fighterB.length > 50) {
        let string = events[i][3][j].fighterB;
        let stringArr = string.split(" ");
        stringArr[0] = stringArr[0][0] + ".";
        events[i][3][j].fighterB = stringArr.join(" ");
      }
    }

    if (showResults) {
      events[i][3][j].rankA = "";
      events[i][3][j].rankB = "";
      if (events[i][3][j].fighterA === events[i][3][j].winner) {
        snippetA = "winnerGreen";
        snippetB = "loserRed";
        snippetC = "vsRes";
        events[i][3][j].rankA =
          events[i][3][j].method + ",  " + events[i][3][j].timing;
        events[i][3][j].rankB = "";
      } else if (events[i][3][j].fighterB === events[i][3][j].winner) {
        snippetB = "winnerGreen";
        snippetA = "loserRed";
        snippetC = "vsRes";
        events[i][3][j].rankA = "";
        events[i][3][j].rankB =
          events[i][3][j].method + ",  " + events[i][3][j].timing;
      }
      if (events[i][3][j].method === "ends in a no contest") {
        snippetB = "draw";
        snippetA = "draw";
      }
      if (events[i][3][j].method === "ends in a draw") {
        snippetB = "draw";
        snippetA = "draw";
      }
    }

    if (!events[i][3][j].recordA.includes("-")) {
      events[i][3][j].recordA = "";
      events[i][3][j].recordB = "";
    }

    mainCard.innerHTML += `
  
    
    <div class="left ${snippetA} leftFighterContainer">
      <div>
        <a href="${events[i][3][j].fighterALink}" target="_blank">${events[i][3][j].fighterA}</a>
      </div>
      <div class="detailsLeft${arg}">
      <div class="oddsLeft" style="color: ${colorA};"><span>${leftOdds}</span></div>        
      <div >${events[i][3][j].rankA}</div>
        <div>${events[i][3][j].recordA}</div>
      </div>
    </div>
    <div  class="middle ${snippetC} middleFighterContainer" >vs
     <div class="detailsMiddle${arg}">${events[i][3][j].weight}</div>
    </div>
     
    <div  class="right ${snippetB} rightFighterContainer">
      <div>
        <a href="${events[i][3][j].fighterBLink}" target="_blank" >${events[i][3][j].fighterB}</a>
        
      <div class="detailsRight${arg}">
        <div>${events[i][3][j].recordB}</div>
        <div>${events[i][3][j].rankB}</div>
        <div class="oddsRight" style="color: ${colorB};"><span>${rightOdds}</span></div>        
      </div>
    </div>
  
    `;
  }

  ////////////////////////////Prelims

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
          name1[2] === fighterA[2] &&
          name1[1] === fighterA[1] &&
          name1[0] === fighterA[0] &&
          name1[name1.length - 1] === fighterA[fighterA.length - 1] &&
          name1[name1.length - 2] === fighterA[fighterA.length - 2]
        ) {
          leftOdds = item.odds;
        }
        if (
          name1[1] === fighterB[1] &&
          name1[0] === fighterB[0] &&
          name1[2] === fighterB[2] &&
          name1[name1.length - 1] === fighterB[fighterB.length - 1] &&
          name1[name1.length - 2] === fighterB[fighterB.length - 2]
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
              colorA = "green ";
              colorB = "green ";
              rightOdds = "-110";
              leftOdds = "-110";
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
              colorA = "green ";
              colorB = "green ";
              rightOdds = "1.95";
              leftOdds = "1.95";
            }
          }
        }
      }
    }

    let snippetA = "";
    let snippetB = "";
    let snippetC = "";

    if (new Date(events[i][1]) - nowEpochX < 0) {
      events[i][3][j].rankA = "";
      events[i][3][j].rankB = "";
    } else {
      if (events[i][3][j].fighterA.length > 50) {
        let string = events[i][3][j].fighterA;
        let stringArr = string.split(" ");
        stringArr[0] = stringArr[0][0] + ".";
        events[i][3][j].fighterA = stringArr.join(" ");
      }
      if (events[i][3][j].fighterB.length > 50) {
        let string = events[i][3][j].fighterB;
        let stringArr = string.split(" ");
        stringArr[0] = stringArr[0][0] + ".";
        events[i][3][j].fighterB = stringArr.join(" ");
      }
    }

    if (showResults) {
      events[i][3][j].rankA = "";
      events[i][3][j].rankB = "";

      if (events[i][3][j].fighterA === events[i][3][j].winner) {
        snippetA = "winnerGreen";
        snippetB = "loserRed";
        snippetC = "vsRes";
        events[i][3][j].rankA =
          events[i][3][j].method + ",  " + events[i][3][j].timing;
        events[i][3][j].rankB = "";
      } else if (events[i][3][j].fighterB === events[i][3][j].winner) {
        snippetB = "winnerGreen";
        snippetA = "loserRed";
        snippetC = "vsRes";
        events[i][3][j].rankA = "";
        events[i][3][j].rankB =
          events[i][3][j].method + ",  " + events[i][3][j].timing;
      }
      if (events[i][3][j].method === "ends in a no contest") {
        snippetB = "draw";
        snippetA = "draw";
      }
    }

    prelimsCard.innerHTML += `
      
      <div class="left ${snippetA} leftFighterContainer">
      <div>
          <a href="${events[i][3][j].fighterALink}" target="_blank" >${events[i][3][j].fighterA}</a>
        </div>
        <div class="detailsLeft${arg}">
        <div class="oddsLeft" style="color: ${colorA};"><span>${leftOdds}</span></div>        
        <div>${events[i][3][j].rankA}</div>
          <div>${events[i][3][j].recordA}</div>
        </div>
      </div>
      <div  class="middle ${snippetC} middleFighterContainer">vs
       <div class="detailsMiddle${arg}">${events[i][3][j].weight}</div>
      </div>
       
      <div class="right ${snippetB} rightFighterContainer">
        <div>
          <a href="${events[i][3][j].fighterBLink}" target="_blank" >${events[i][3][j].fighterB}</a>
          
        <div class="detailsRight${arg}">
          <div>${events[i][3][j].recordB}</div>
          <div>${events[i][3][j].rankB}</div>
          <div class="oddsRight" style="color: ${colorB};"><span>${rightOdds}</span></div>        
          </div>
      </div>
      
      `;
  }

  if (odds_present == true) {
    $(".oddsLeft").addClass("hasOdds");
    $(".oddsRight").addClass("hasOdds");
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

      mainTime.textContent = `Main: ${mainCardTime}`;

      mainTime.innerHTML += `
        <i class="material-icons noSelect" id="expandMore" onclick="toggleD()">expand_less</i>
         `;
    } else if (localStorage.getItem("details") === "y") {
      let details = document.querySelector("#details");
      details.checked = false;
      $(".detailsLeft").css("display", "block");
      $(".detailsRight").css("display", "block");
      $(".detailsMiddle").css("display", "block");
      $(".detailsLeftMinus1").css("display", "block");
      $(".detailsRightMinus1").css("display", "block");
      $(".detailsMiddleMinus1").css("display", "block");
      $(".detailsLeftPlus1").css("display", "block");
      $(".detailsRightPlus1").css("display", "block");
      $(".detailsMiddlePlus1").css("display", "block");
    }
  } else {
    hideDetailsSettings();
  }

  if (screen.width > 474) {
    generateLinks();
  }

  let videoGallery = document.querySelector(`#videoGallery${arg}`);

  for (let v = 0; v < videos.length; v++) {
    videoGallery.innerHTML += `<div class="youtube-player" data-id="${videos[0]}"></div>
      <br>
      <br>
      <br>`;
  }
  initYouTubeVideos();

  /////////////////////hide  navigathion arrows
  if (arg === "Plus1") {
    document.querySelector("#navImageRight").src = `${events[i][2]}`;
    document.querySelector(
      "#navEventTitleRight"
    ).textContent = `${events[i][4]}`;
  }
  if (arg === "Minus1") {
    document.querySelector("#navImageLeft").src = `${events[i][2]}`;
    document.querySelector(
      "#navEventTitleLeft"
    ).textContent = `${events[i][4]}`;
  }
}

function changeSettings() {
  /////////////////////
  vibrate();
  ///////////////////////
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
  /////////////////////
  vibrate();
  ///////////////////////
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
  /////////////////////
  vibrate();
  ///////////////////////

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

function hideDetailsSettings() {
  /////////////////////
  vibrate();
  ///////////////////////
  if (localStorage.getItem("details") === "n") {
    localStorage.setItem("details", "y");
  } else {
    localStorage.setItem("details", "n");
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

function toggleOddsType() {
  vibrate();
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
  vibrate();
  if (document.querySelector("#showHideCountdown").checked === true) {
    localStorage.setItem("countdown", "y");
  } else {
    localStorage.setItem("countdown", "n");
  }
}

const countdownToggle = function () {
  vibrate();
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

function showShareButtons() {
  vibrate();
  let sharingBtns = document.querySelector("#sharingTop");
  if (sharingBtns.style.display === "block") {
    sharingBtns.style.display = "none";
  } else {
    sharingBtns.style.display = "block";
    /*setTimeout(() => {
        sharingBtns.style.display = "none";
      }, 5000);*/
  }
}

function setMainCountdown(time) {
  let mainCountdown = time.getTime();

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  document.getElementById("days2").innerText = "-";
  document.getElementById("hours2").innerText = "-";
  document.getElementById("minutes2").innerText = "-";

  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = mainCountdown - now;
    if (distance < 0) {
      distance = 0;
    }
    if (distance > 8.64e9) {
      document.getElementById("days2").style.width = "42px";
    }
    document.getElementById("days2").innerText = Math.floor(distance / day);

    if (
      events[i][1] - nowEpochX < 604800000 &&
      events[i][1] - nowEpochX > -28800000
    ) {
      document.getElementById("hours2").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes2").innerText = Math.floor(
        (distance % hour) / minute
      );
    }

    if (
      Math.floor(distance / hour) === 0 &&
      Math.floor(distance / minute) > 0
    ) {
      document.getElementById("minutes2").style.color = "red";
    }
    if (distance < 0) {
      document.getElementById("minutes2").style.color = "black";
    }
  }, second);
}

function setPrelimsCountdown(time) {
  let prelimCountdown = time.getTime();

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

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
    document.getElementById("days").innerText = Math.floor(distance2 / day);

    if (
      events[i][1] - nowEpochX < 604800000 &&
      events[i][1] - nowEpochX > -28800000
    ) {
      document.getElementById("hours").innerText = Math.floor(
        (distance2 % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance2 % hour) / minute
      );
    }

    if (Math.floor(distance2 / day) === 0) {
      document.getElementById("days").innerText = "0";
    }
    if (Math.floor(distance2 / hour) === 0) {
      document.getElementById("hours").innerText = "0";
    }
    if (Math.floor(distance2 / minute) === 0) {
      document.getElementById("minutes").innerText = "0";
    }
    if (
      Math.floor(distance2 / hour) === 0 &&
      Math.floor(distance2 / minute) > 0
    ) {
      document.getElementById("minutes").style.color = "red";
    }
    if (distance2 < 0) {
      document.getElementById("minutes2").style.color = "black";
    }
  }, second);
}

function vibrate() {
  /////////////////////
  if (android) {
    // navigator.vibrate(40);
  }
  ///////////////////////
}

function make(e) {
  vibrate();
  // e.preventDefault();   // to not go to href url uncoment this
}

/*
 * Light YouTube Embeds by @labnol
 * Credit: https://www.labnol.org/
 */

function labnolIframe(div) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  );
  div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div");
    div.setAttribute("data-id", videoId);
    var thumbNode = document.createElement("img");
    thumbNode.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", videoId);
    div.appendChild(thumbNode);
    var playButton = document.createElement("div");
    playButton.setAttribute("class", "play");
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}

function toggleResults() {
  if (showResults) {
    showResults = false;
    $(".show_results_checkbox").hide();
  } else {
    showResults = true;
  }
  create();
}

function toggleDonatePopup() {
  let donatePopup = document.querySelector(".donatePopup");

  if (donatePopup.style.display === "block") {
    donatePopup.style.display = "none";
  } else {
    donatePopup.style.display = "block";
  }
}

setTimeout(() => {
  document.getElementById("navBlocks").style.opacity = 1;
  document.getElementById("rightArrow").style.transform =
    "perspective(250px) rotateY(6deg) translateX(350px)";
  document.getElementById("leftArrow").style.transform =
    "perspective(250px) rotateY(-5deg) translateX(-350px)";
}, 0);

let searchResults = document.getElementById("searchResults");
let searchValue = document.getElementById("searchInput");

const openSearchContainer = () => {
  searchResults.innerHTML = "";
  searchValue.value = "";
  $("#searchContainer").toggle();

  //ensure sidena is closed when opening search
  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.width === "325px") {
    $("#hamburger-1").toggleClass("is-active");
    eventList.innerHTML = ``;
    sideNav.style.width = "0%";
    $("#dim").fadeOut(200);
  }
  searchValue.focus();
};

document
  .getElementById("mobileSearch")
  .addEventListener("click", openSearchContainer);

document
  .getElementById("mobileSearch")
  .addEventListener("tap", openSearchContainer);

function searchFighters() {
  searchResults.innerHTML = "";
  let searchValue = document.getElementById("searchInput");

  if (searchValue.value.length > 1) {
    fighterArray.forEach((entry) => {
      if (
        entry.fighter.toLowerCase().includes(searchValue.value.toLowerCase())
      ) {
        searchResults.innerHTML += `
            <div>
            <li onclick="searchSelect(${entry.index} ,'${entry.fighter}' )" class="searchResultsItem">${entry.fighter}
            <span class="searchResultDate">${entry.date}</span></li>
            </div>
            
            `;
      }
    });
  }
}

function searchSelect(w, search_string) {
  i = w;
  ///////////////////////
  pausecomp(50);
  showResults = false;
  create(search_string);
  window.scrollTo(0, 0);

  $("#searchContainer").toggle();
}

$("#closeSearch").click(function () {
  $("#searchContainer").toggle();
  document.getElementById("searchContainer").style.display = "none";
});

if (localStorage.getItem("auto_expand_reset")) {
  console.log("===");
} else {
  console.log("not reset yet, resetting");
  localStorage.setItem("details", "n");
  localStorage.setItem("auto_expand_reset", "reset");
  location.href = "/";
}
