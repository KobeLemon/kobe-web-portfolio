// open & close the hamburger menu when in small & tablet views
// could also be rewritten to do the same thing but when the button is hovered
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const fulldate = new Date().toLocaleDateString('en-us', {weekday: "long", year:"numeric", month:"short", day:"numeric"});
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
	// iterate through data.json and check if membership == "Silver" or "Gold", & if equal, then append that item to a new list. Then return that list.
	let newArray = [];
	companies.forEach((item) => {
		if (item.membership == "Silver" || item.membership == "Gold"){
			newArray.push(item);
		}
	})
	// console.log(newArray);
	return newArray;
}