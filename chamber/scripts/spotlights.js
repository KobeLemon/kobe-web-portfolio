const jsonFile = "json/data.json";

async function homePageSpotlights() {
    const response = await fetch(jsonFile);
    const data = await response.json();
	let memberArray = buildMemberArray(data.companies);
	displaySpotlightsAll(memberArray);
}

const displaySpotlightSingle = (slName, slDescription, slLogo, slWebsite, slPhone, company) => {
	let name = document.getElementById(slName)
	let description = document.getElementById(slDescription);
	// let membershipLevel = document.getElementById(slMembership);
	let logoImg = document.getElementById(slLogo);
	let siteLink = document.getElementById(slWebsite);
	let phoneNum = document.getElementById(slPhone)

	// membershipLevel.textContent = company.membership;
	name.textContent = company.businessName;
	description.textContent = company.businessDescription;
	siteLink.textContent = company.website;
	phoneNum.textContent = company.phone;

	logoImg.setAttribute('src', company.logo);
	logoImg.setAttribute('alt', `Logo of ${company.businessName}`);
	logoImg.setAttribute('loading', 'lazy');
	logoImg.setAttribute('width', '200');
	logoImg.setAttribute('height', '100');
}

const displaySpotlightsAll = (companies) => {
	let randomNum1 = randomNumber(companies);
	// console.log(`randomNum1: ${randomNum1}`);
	let random1 = companies[randomNum1];
	// console.log(`Random1:`);
	// console.table(random1);
	let randomNum2 = randomNumber(companies);
	// console.log(`randomNum2: ${randomNum2}`);
	let random2 = companies[randomNum2];
	// console.log(`Random2:`);
	// console.table(random2);
	let randomNum3 = randomNumber(companies);
	// console.log(`randomNum3: ${randomNum3}`);
	let random3 = companies[randomNum3];
	// console.log(`Random3:`);
	// console.table(random3);

	// These "while" loops check if two spotlights are the same & if true: it will pick a new number until they are different, then it will check the next loop, and then the next, & if all three spotlights are different, it will build the spotlights.
	while (random1 == random2) {
		random2 = companies[randomNumber(companies)];
		// console.table(`Random2: ${random2}`);
		if (random1 != random2) {
			break
		}
	}
	while (random1 == random3) {
		random3 = companies[randomNumber(companies)];
		// console.table(`Random3: ${random3}`);
		if (random1 != random2) {
			break
		}
	}
	
	while (random2 == random3) {
		random3 = companies[randomNumber(companies)];
		// console.table(`Random3: ${random3}`);
		if (random2 != random3) {
			break
		}
	}
    displaySpotlightSingle('slName1','slTag1','slLogo1','slLink1', 'slPhone1', random1);
	displaySpotlightSingle('slName2','slTag2','slLogo2','slLink2', 'slPhone2', random2);
	displaySpotlightSingle('slName3','slTag3','slLogo3','slLink3', 'slPhone3', random3);
}

homePageSpotlights();