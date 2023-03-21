const url = "json/data.json";

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.companies);
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const cards = document.querySelector(".cards");

    companies.forEach((company) => {
        // this creates the container of each individual card
        let card = document.createElement('section');
        card.classList.add('directoryCard');
        
        // These are the elements for the info about each company
        let logo = document.createElement('img');
        logo.classList.add('listNone');
        let chamberRep = document.createElement('img');
        chamberRep.classList.add('listNone')
        let divider = document.createElement('hr');
        divider.classList.add('listNone');
        let companyName = document.createElement('h2');
        let description = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');

        // Build the company card
        companyName.textContent = company.businessName;
        description.textContent = company.businessDescription;
        phone.textContent = company.phone;
        email.textContent = company.email;
        address.textContent = company.address;
        website.textContent = company.website;
        membership.textContent = `${company.membership} Membership`;

        // Build the logo
        logo.setAttribute('src', company.logo);
        logo.setAttribute('alt', `Logo of ${company.businessName}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '100');

        // Build the chamber rep profile picture
        chamberRep.setAttribute('src', company.chamberRep);
        chamberRep.setAttribute('alt', `Picture of ${company.businessName}'s Chamber Representative: ${company.fname} ${company.lname}`);
        chamberRep.setAttribute('loading', 'lazy');
        chamberRep.setAttribute('width', '100');
        chamberRep.setAttribute('height', '100');

        // link the website url of each company
        website.setAttribute('href', company.website);
        // website.innerHTML(company.website)

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(chamberRep);
        card.appendChild(divider);
        card.appendChild(companyName);
        card.appendChild(description);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);

        // Add each card to the cards div
        cards.appendChild(card);

    }); // end of companies.forEach loop
} // end of displayCompanies function

getCompanyData();

const contentLayout = document.getElementById("gridLayout");
const btnGridList = document.getElementById("btnGridList");

function changeLayout() {
    if (contentLayout.id == "gridLayout") {
        contentLayout.id = "listLayout";
        btnGridList.textContent = "Switch to Grid ⊞";
    }
    else {
        contentLayout.id = "gridLayout";
        btnGridList.textContent = "Switch to List 📄";
    }
}