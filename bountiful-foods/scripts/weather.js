let recipeCount = Number(localStorage.getItem("recipeCount"));
document.getElementById('drinkAmountNumber').innerHTML = recipeCount;

const oneDayIcon = document.getElementById('oneDayIcon');
const oneDayTemp = document.getElementById('oneDayTemp');
const oneDayDesc = document.getElementById('oneDayDesc');
const oneDayHumidity = document.getElementById('oneDayHumidity');
const today = document.getElementById('today');
const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const threeDayIcon1 = document.getElementById('threeDayIcon1');
const threeDayIcon2 = document.getElementById('threeDayIcon2');
const threeDayIcon3 = document.getElementById('threeDayIcon3');
const threeDayTemp1 = document.getElementById('threeDayTemp1');
const threeDayTemp2 = document.getElementById('threeDayTemp2');
const threeDayTemp3 = document.getElementById('threeDayTemp3');
const threeDayHumidity1 = document.getElementById('threeDayHumidity1');
const threeDayHumidity2 = document.getElementById('threeDayHumidity2');
const threeDayHumidity3 = document.getElementById('threeDayHumidity3');
const threeDayDesc1 = document.getElementById('threeDayDesc1')
const threeDayDesc2 = document.getElementById('threeDayDesc2')
const threeDayDesc3 = document.getElementById('threeDayDesc3')

const url = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=659d1abc1a1e9d987421cfc8b88e65fc&lat=33.16226899409092&lon=-117.34900482240532';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
            displayResults(data, 0, today, oneDayTemp, oneDayHumidity, oneDayIcon, oneDayDesc);
            displayResults(data, 7, day1, threeDayTemp1, threeDayHumidity1, threeDayIcon1, threeDayDesc1);
            displayResults(data, 15, day2, threeDayTemp2, threeDayHumidity2, threeDayIcon2, threeDayDesc2);
            displayResults(data, 23, day3, threeDayTemp3, threeDayHumidity3, threeDayIcon3, threeDayDesc3);
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}
// change indexes 
function displayResults(weatherData, index, date, temp, humidity, icon, description){
    // Find the following weather values
    let currentTempInt = weatherData.list[index].main.temp.toFixed(0);
    // console.log(`currentTempInt: ${currentTempInt}`);
    let todayDate = weatherData.list[index].dt_txt;
    let humidityInt = weatherData.list[index].main.humidity.toFixed(0);
    // console.log(`humidityInt: ${humidityInt}`);
    let iconSrc = `https://openweathermap.org/img/w/${weatherData.list[index].weather[0].icon}.png`;
    let desc = capitalizeSentence(weatherData.list[index].weather[0].description);
    // console.log(`Weather Description: ${desc}`)
    // console.log(weatherData.list[index].dt_txt)

    date.innerHTML = `<strong>${todayDate}<strong>`;
    temp.innerHTML = `<strong>${currentTempInt}°F<strong>`;
    humidity.innerHTML = `<strong>${humidityInt}%<strong>`;
    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', desc);
    description.innerHTML = `<strong>${desc}<strong>`;
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