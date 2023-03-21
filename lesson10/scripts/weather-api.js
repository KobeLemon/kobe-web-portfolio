const currentTemp = document.getElementById('currentTemp');
const weatherIcon = document.getElementById('weatherIcon');
const figCaption = document.querySelector('figcaption')

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=659d1abc1a1e9d987421cfc8b88e65fc';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}°F<strong>`;

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = capitalizeSentence(weatherData.list[0].weather[0].description);
    // console.log(`Weather Description: ${desc}`)

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    figCaption.textContent = desc;
}

function capitalizeSentence(sentence) {
    let string = sentence.split(' ');
    let newString = []
    string.forEach(item =>{
        itemSplit = item.split('');
        itemSplit[0] = itemSplit[0].toUpperCase();
        itemJoin = itemSplit.join('')
        newString.push(itemJoin)
    })
    return newString = newString.join(' ');
}

apiFetch()