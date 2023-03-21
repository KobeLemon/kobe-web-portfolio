const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData () {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector(".cards");

    prophets.forEach((prophet) => {
        // this creates the container of each individual card
        let card = document.createElement('section');

        // These are the elements for the info about each prophet
        let name = document.createElement('h2');
        let birthDate = document.createElement('p');
        let death = document.createElement('p');
        let prophetYears = document.createElement('p');
        let prophetOrder = document.createElement('p');
        let birthPlace = document.createElement('p');
        let children = document.createElement('p');
        let portrait = document.createElement('img');

        // Build the name, birthDate, & birthDate content out to show the prophet's name, birth date, & birth place
        name.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        death.textContent = `Date of Death: ${prophet.death}`;
        prophetYears.textContent = `Prophet Years: ${prophet.length}`;
        prophetOrder.textContent = `Prophet # ${prophet.order}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        children.textContent = `Children: ${prophet.numofchildren}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl); // fills the image source with the url of the current prophet iteration
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`) // fills the image alt description with the name of the current prophet iteration
        portrait.setAttribute('loading', 'lazy'); // sets the loading attribute to laze which defers the loading of the image to only load when the user scrolls near the image
        portrait.setAttribute('width', '330'); // sets the image's width to 340
        portrait.setAttribute('height', '440'); // sets the image's height to 440

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(birthDate);
        card.appendChild(death);
        card.appendChild(prophetYears);
        card.appendChild(prophetOrder);
        card.appendChild(birthPlace);
        card.appendChild(children);
        card.appendChild(portrait);

        // Add each card to the cards div
        cards.appendChild(card);

    }); // end of prophets.forEach loop
} // end of displayProphets function

getProphetData();