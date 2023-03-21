const windspeed = document.getElementById('windspeed');
const windchill = document.getElementById('windchill');
const currentTemp = document.getElementById('currentTemp');
const weatherIcon = document.getElementById('weatherIcon');
const figCaption = document.querySelector('figcaption');
const humidity = document.getElementById('humidity');

const url = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&zip=84075,us&appid=659d1abc1a1e9d987421cfc8b88e65fc';

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
    // Find the following weather values
    let currentTempInt = weatherData.list[0].main.temp.toFixed(0);
    // console.log(`currentTempInt: ${currentTempInt}`);
    let windspeedInt = weatherData.list[0].wind.speed.toFixed(0);
    // console.log(`windspeedInt: ${windspeedInt}`);
    let humidityInt = weatherData.list[0].main.humidity.toFixed(0);
    // console.log(`humidityInt: ${humidityInt}`);
    let iconSrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    let desc = capitalizeSentence(weatherData.list[0].weather[0].description);
    // console.log(`Weather Description: ${desc}`)

    // Set the following weather values
    currentTemp.innerHTML = `<strong>${currentTempInt}°F<strong>`;
    windspeed.innerHTML = `Wind Speed: <strong>${windspeedInt} mph<strong>`;
    humidity.innerHTML = `Humidity: <strong>${humidityInt}%<strong>`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    figCaption.textContent = desc;

    // Calculate Windchill
    if (currentTempInt <= 50 && windspeedInt >= 3) {
        let windchillInt = Math.round(calculateWindChill(currentTempInt, windspeedInt))
        windchill.innerHTML = `Feels Like: <strong>${windchillInt}°F</strong>`;
        
    }
    else {
        windchill.innerHTML = "N/A";
    }
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

function calculateWindChill (temperature, windspeed) {
    let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    // console.log(`function calculateWindChill return: ${windchill}`);
    return windchill;
}

apiFetch()