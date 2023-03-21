// find the element with the id of "copyrightYear" & update the innerHTML element to show the current year dynamically
document.getElementById("copyrightYear").textContent = new Date().getFullYear();
// console.log(`Current Footer Year: ${document.getElementById("copyrightYear").textContent}`);

// find the element with the id of "date" & update the innerHTML to show the document's last modified date/time
document.getElementById("lastModified").textContent = document.lastModified;
// console.log(`Current Footer Date/Time: ${document.getElementById("lastModified").textContent}`);

// open & close the hamburger menu when in small & tablet views
// could also be rewritten to do the same thing but when the button is hovered
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const weekDaynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
// console.log(`Weekday Names: ${weekDaynames}`);
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
// console.log(`Months Names: ${months}`);
const d = new Date();
// console.log(`Current Unformatted Date: ${d}`);
const weekDayNumber = d.getDay()
// console.log(`Current Weekday Number: ${weekDayNumber}`);
const weekDayName = weekDaynames[weekDayNumber];
// console.log(`Current Weekday Name: ${weekDayName}`);
const monthName = months[d.getMonth()];
// console.log(`Current Month Name: ${monthName}`);
const year = d.getFullYear();
// console.log(`Current Year Name: ${year}`);
const fulldate = `${weekDayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentDate").innerHTML = fulldate;
// console.log(`Current Formatted Date: ${document.getElementById("currentDate").innerHTML}`);

if (weekDayNumber == 1 || weekDayNumber == 2){
	// console.log(`Mon/Tues If Statement True| Current Weekday Number: ${weekDayNumber}`);
    document.getElementById("chamberMeetingBanner").style.display = "block";
	// console.log(`Mon/Tues If Statement True | Set Meeting Banner display to block`);
}
else {
	// console.log(`Mon/Tues If Statement False | Current Weekday Number: ${weekDayNumber}`);
    document.getElementById("chamberMeetingBanner").style.display = "none";
	// console.log(`Mon/Tues If Statement False | Set Meeting Banner display to none`);
}

function randomNumber(array) {
	// console.log(`ArrayLength: ${array.length}`);
	return randomNum = Math.floor(Math.random() * (array.length));
}

function buildMemberArray(companies) {
	// iterate through data.json and check if membership == "Silver" or "Gold", then append that item to a new list. Then return that list.
	let newArray = [];
	companies.forEach((item) => {
		if (item.membership == "Silver" || item.membership == "Gold"){
			newArray.push(item);
		}
	})
	// console.log(newArray);
	return newArray;
}