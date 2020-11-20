function startTime() {
let today = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let dayOfTheWeek = weekday[today.getDay()];

const monthOfTheYear = new Array(12);
monthOfTheYear[0] = "January";
monthOfTheYear[1] = "February";
monthOfTheYear[2] = "March";
monthOfTheYear[3] = "April";
monthOfTheYear[4] = "May";
monthOfTheYear[5] = "June";
monthOfTheYear[6] = "July";
monthOfTheYear[7] = "August";
monthOfTheYear[8] = "September";
monthOfTheYear[9] = "October";
monthOfTheYear[10] = "November";
monthOfTheYear[11] = "December";

let monthYear = monthOfTheYear[today.getMonth()];

let h = today.getHours();
let m = today.getMinutes();
m = checkTime(m);
let s = today.getSeconds();
s = checkTime(s);

let t = setTimeout(startTime, 500);

document.getElementById("currentDate").innerHTML = dayOfTheWeek + ", " + today.getDate() + " " + monthYear + " " + today.getFullYear();
// document.getElementById("currentDate").innerHTML = dayOfTheWeek + ", " + today.getDate() + "-" + monthOfTheYear() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
document.getElementById("currentTime").innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}

// Function To Convert Day Integer to String

new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];