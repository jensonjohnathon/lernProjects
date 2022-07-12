const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsAbridged = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.setInterval('getTime()', 10000);

function getTime () {
    const d = new Date();
    console.log(d);

    function endingsFunction () {
        if (d.getDate() === 1) {
            return "st";
        }
        else if (d.getDate() === 2) {
            return "nd";
        }
        else if (d.getDate() === 3) {
            return "rd";
        }
        else {
            return "th";
        }
    }

    var currentWeekday = weekdays[d.getDay()];
    var month = months[d.getMonth()];
    var ending = endingsFunction();

    document.getElementById('current_Year').textContent = d.getFullYear();
    document.getElementById('current_Weekday').textContent = currentWeekday;
    document.getElementById('current_Day').textContent = d.getDate() + ending;
    document.getElementById('current_Month').textContent = month;
    document.getElementById('clockHour').textContent = d.getHours();
    document.getElementById('clockMinute').textContent = d.getMinutes();
    document.getElementById('clockSecond').textContent = d.getSeconds();
}

document.getElementById("getChristmasDays").onclick  = function() {
    const d = new Date();

    var monthAbridged = monthsAbridged[d.getMonth()];

    var currentDate = d.getDate();
    var currentYear = d.getFullYear();
    var currentDateString = currentDate.toString();
    var currentYearString = currentYear.toString();

    var christmasDay = "24 Dec " + currentYearString + " 00:00:00 GMT";
    var currentDayOne = currentDateString + " " + monthAbridged + " " + currentYearString + " 00:00:00 GMT";
    console.log(currentDayOne);
    console.log(christmasDay)

    function getDaysLeft () {
        if (Date.parse(christmasDay) > Date.parse(currentDayOne)) {
            let daysLeft = Date.parse(christmasDay) - Date.parse(currentDayOne);
            return daysLeft / 86400000;
        }
        else {
            currentYear += 1;
            let currentDayTwo = currentDate.toString() + "-" + currentMonth.toString() + "-" + currentYear.toString();
            let daysLeft = Date.parse(currentDayTwo) - Date.parse(christmasDay);
            return daysLeft / 86400000;
        }

    }

    document.getElementById('dayUntil').textContent = getDaysLeft();
}