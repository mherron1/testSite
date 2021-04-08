const eventDate = document.querySelector(
  "#content > div.details.details_with_poster.clearfix > div.right > ul > li.header"
).innerText;

let dateArray = eventDate.textContent.split(" "); ///remove textContent if origin scrape
let year = parseInt(dateArray[1].split(".")[2]);
let month = dateArray[1].split(".")[0] - 1;
let day = parseInt(dateArray[1].split(".")[1]);
let hour = parseInt(dateArray[3].split(":")[0]);

if (hour > 11) {
  hour = hour + 5; //////// +5 hours to convert to UTC time
} else {
  hour = hour + 12 + 5; ///////////// +5 hours to convert to UTC time
  if (hour > 24) {
    hour = hour - 24;
    day += 1;
  }
}
let minute = parseInt(dateArray[3].split(":")[1]);
let second = 0;
var main = new Date(year, month, day, hour, minute, second);

return main;
