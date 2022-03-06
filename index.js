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
    if (localStorage.getItem("bellator") === "y") {
      filterArr.push("Bellator");
      document.querySelector("#bellatorInput").checked = true;
      numRes += 1;
    }
    if (localStorage.getItem("one") === "y") {
      filterArr.push("ONE");
      document.querySelector("#oneInput").checked = true;
      numRes += 0;
    }
    if (localStorage.getItem("pfl") === "y") {
      filterArr.push("Professional");
      document.querySelector("#pflInput").checked = true;
      numRes += 1;
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
    filterArr.push("Ultimate");
    filterArr.push("Bellator");
    filterArr.push("Professional");
    filterArr.push("ONE");
    document.querySelector("#oneInput").checked = true;
    numRes += 0;
    document.querySelector("#pflInput").checked = true;
    numRes += 1;
    document.querySelector("#ufcInput").checked = true;
    numRes += 1;
    document.querySelector("#bellatorInput").checked = true;
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
  eventList.innerHTML += `<br><br>`;
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
  desktopLinks.innerHTML += `
  <br>
  <br>
  
  <div class="socialSharingContainer2">
  <br>
 
<div> <i class="fa fa-share"></i> Share</div><br>

    <a href="https://twitter.com/intent/tweet?url=${window.location.href}" title="Twitter" target="_blank">
            <svg class="socialSharingIcons2" id="icon-twitter" viewBox="0 0 112.197 112.197"><circle cx="56.099" cy="56.098" r="56.098" fill="#1da1f2"></circle><path fill="#fff" d="M90.461 40.316a26.753 26.753.0 0 1-7.702 2.109 13.445 13.445.0 0 0 5.897-7.417 26.843 26.843.0 0 1-8.515 3.253 13.396 13.396.0 0 0-9.79-4.233c-7.404.0-13.409 6.005-13.409 13.409.0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351.0 0 0-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314.0 0 1-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362.0 0 1-3.532.471c-.866.0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904.0 0 1-16.655 5.74c-1.08.0-2.15-.063-3.197-.188a37.929 37.929.0 0 0 20.553 6.025c24.664.0 38.152-20.432 38.152-38.153.0-.581-.013-1.16-.039-1.734a27.192 27.192.0 0 0 6.692-6.94z"></path></svg>
    </a>

    <a href="https://t.me/share/url?url=${window.location.href}" title="Telegram" target="_blank">
            <svg class="socialSharingIcons2" id="icon-telegram" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#08c"></circle><path fill="#fff" d="M221.138 293.3l115.691 87.347 58.399-249.287L96.771 248.759l90.817 30.081 165.743-111.176z"></path><path fill="#d2d2d7" d="M187.588 278.84l24.873 89.504 8.677-75.044 132.193-125.636z"></path><path fill="#b9b9be" d="M258.738 321.688l-46.277 46.656 8.677-75.044z"></path></svg>
    </a>

    <a href="https://api.whatsapp.com/send?text=https://mmafightcards.org/" title="WhatsApp" target="_blank">
    <img class="socialSharingIcons2" src="https://mmafightcards.org/images/socialImages/whatsApp.jpg" ></img>
    </a>

</div>`;

  document.getElementById("icon-twitter").addEventListener("touchstart", () => {
    window.location.href = `https://twitter.com/intent/tweet?url=${window.location.href}`;
  });
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
  <script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support the site', '#e05e5e', 'J3J83LW44');kofiwidget2.draw();</script> 

 
  
  
  
  <br>
  <br><br>

  
  
  <div class="socialSharingContainer">
  
  <a href="https://twitter.com/intent/tweet?url=${window.location.href}" title="Twitter" target="_blank">
                  <svg class="socialSharingIcons" id="icon-twitter" viewBox="0 0 112.197 112.197"><circle cx="56.099" cy="56.098" r="56.098" fill="#1da1f2"></circle><path fill="#fff" d="M90.461 40.316a26.753 26.753.0 0 1-7.702 2.109 13.445 13.445.0 0 0 5.897-7.417 26.843 26.843.0 0 1-8.515 3.253 13.396 13.396.0 0 0-9.79-4.233c-7.404.0-13.409 6.005-13.409 13.409.0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351.0 0 0-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314.0 0 1-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362.0 0 1-3.532.471c-.866.0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904.0 0 1-16.655 5.74c-1.08.0-2.15-.063-3.197-.188a37.929 37.929.0 0 0 20.553 6.025c24.664.0 38.152-20.432 38.152-38.153.0-.581-.013-1.16-.039-1.734a27.192 27.192.0 0 0 6.692-6.94z"></path></svg>
              </a>
              <!--<a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}" target="_blank">
              <img class="socialSharingIcons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png" ></img>
              </a>-->
  
  <a href="https://t.me/share/url?url=${window.location.href}" title="Telegram" target="_blank">
                  <svg class="socialSharingIcons" id="icon-telegram" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#08c"></circle><path fill="#fff" d="M221.138 293.3l115.691 87.347 58.399-249.287L96.771 248.759l90.817 30.081 165.743-111.176z"></path><path fill="#d2d2d7" d="M187.588 278.84l24.873 89.504 8.677-75.044 132.193-125.636z"></path><path fill="#b9b9be" d="M258.738 321.688l-46.277 46.656 8.677-75.044z"></path></svg>
              </a>
  
        <a href="https://api.whatsapp.com/send?text=https://mmafightcards.org/" title="WhatsApp" target="_blank">
        <img class="socialSharingIcons" src="https://mmafightcards.org/images/socialImages/whatsApp.jpg" ></img>
        </a>
  
       <!-- <a id="copyLinkElement" onclick="this.style.opacity = '1'"> <img  class="socialSharingIcons" src="https://cdn1.iconfinder.com/data/icons/web-design-and-development-50/64/110-512.png"></img></a>
  -->
  </div>
  
  <br>
  
  
  
  
  <div id="footerDiv">
  <a target="_blank"
  href="https://www.paypal.com/donate?hosted_button_id=2CEEF22SKG3HN">
  <div id="paypalLink2">Buy me a beer 🍻</div></a>
      </div>
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

  let imageContainer = document.querySelector(`#imageContainer${arg}`);
  imageContainer.innerHTML = `
  <img id="eventPoster${arg}" src=${events[i][2]}>
  <img style="position:absolute; left:2px;top:2px; border-radius:8px; height:60px;width:65px; opacity:100%;" id="eventPoster${arg}" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4PEBAQExISFhUQEhkQEBUVFhcSFRAVFRUYFhUVFRUYHSggGBolHRUWITEhJSkrLi4uFx80OTQsOCgtLisBCgoKDg0OGxAQGy0lHyYvKy8tLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOIA3wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAEcQAAECAgYCDQkGBQUBAAAAAAEAAgMRBAUGEiExQbETFjRRU2FxcnOBorLiIjIzgpGSocHCFEJSYmPRI3SDs+EVJTVD8CT/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAD4RAAEDAgQBCAYIBQUAAAAAAAEAAgMEEQUSITFBBhMyUWFxscEUIoGRodEVIzQ2UnKy8DNCU8LhFmJzgtL/2gAMAwEAAhEDEQA/AOdERdmufREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWWtJwAJ5MUc0jMS5VO2N3Q7ozratNrN1P5re6FUjEycUNDl0DM+a/wtspRp7U/PX42sodZa0nAAk7wE1hXqAyDQKOHOGOF4jznuOgcX7LGL4r6C1jY2F8jzZrRpc9/YlLTCYkuNmjcqjxIbm4OaRygg/FeFfqJSoFPhvaWnycCHSm2eRB/9kq/UtVQ30iNCiC8IYMpEiZDgJ4KBS8owY5/Soyx8Iu5osdDxHt4dy3yUGrObdcO2OygkXfXtGZCpESGwSa27ITnm0HM8q4F0NPM2eJsrRo4Ajr1F9VAkYWOLTwRERbV5REREWAF7cwjMEcokt1Xemg9I3vBWW258iDz3agqmrxN0FfBSBtxJm1va1uzjdSoqcPhfLfo2VRXsw3ATkZb8ivKu8c7LV0/0Aetkp91YxbFDQGH1bh7wwm9rX4+KzTUwmDtbEC6pTWk5AnkE15lo6lar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T2r0r9L3j+ynLN1ZFozYgfd8sgiRnkDxKFidFgkdM51LMXP0sL9uv8o4LZBLUl4D22H77VMIsrC5RT0RERFlFhERZRYREWUWERFlFhERFlYREWUWERFlFhERZRYREWUWERFlFhERZRYREWF6WERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF/9k=">
  <span style="position:absolute; background-color:white; color:black !important;padding:1px 0px; opacity:1; top:11px; left:62px; z-index:10000;color:white;"></span>
  <br>
  `;

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
      imageDiv.innerHTML += `
        <button id ="showResults" onclick="toggleResults()">Show/Hide Results</button>
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
      <div style="color: ${colorA}; font-size:0.9rem; font-weight:bold;">${leftOdds}</div>        
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
        <div style="color: ${colorB}; font-size:0.9rem; font-weight:bold;">${rightOdds}</div>        
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
        <div style="color: ${colorA}; font-size:0.9rem; font-weight:bold;">${leftOdds}</div>        
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

      mainTime.textContent = `Main: ${mainCardTime}`;

      mainTime.innerHTML += `
        <i class="material-icons noSelect" id="expandMore" onclick="toggleD()">expand_less</i>
         `;
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
  } else {
    showDetailsSettings();
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

function showDetailsSettings() {
  /////////////////////
  vibrate();
  ///////////////////////
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
  console.log();
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
    (document.getElementById("days2").innerText = Math.floor(distance / day)),
      (document.getElementById("hours2").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes2").innerText = Math.floor(
        (distance % hour) / minute
      ));

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
    (document.getElementById("days").innerText = Math.floor(distance2 / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance2 % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance2 % hour) / minute
      ));
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
  console.log("vibrate");
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

console.log("Hi there!");

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
