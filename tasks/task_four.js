// Task 4: Create an asynchronous function that fetches and returns data from a free weather API. Use the data to dynamically populate a simple UI. You are to use only three core values from the weather API to populate your UI. The design of the UI depends on the weather API you’d be using. Apply try/catch in your algorithm. If the request is not successful, display a failure message to the user. Make your UI responsive.



// async function getWeather {
//     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=acb2e7a29f10fa8558aab71b6812ce2d`)

//     const data = await response.json()
//     showPage(data)

// }

// function showPage(data) {
    
// }


// Btn.addE('click', getWeather)


let cityInput = document.querySelector('.locationinput')
async function getUrl(){
    const url = getCity()
    try {
        // if(!cityInput.value) return alert('no input')
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        return error
    }
}
async function weatherDisplay (){
    const result = await getUrl()
    console.log(result)
    let weatherDescription = document.querySelector('.describe')
    weatherDescription.innerText = result.weather[0].description
    let wind = document.querySelector('.wind')
    wind.innerText = `wind speed: ${result.wind.speed}m/s`
    let cityTemperature = document.querySelector('.temperature')
    cityTemperature.innerText = `Temperature: ${Math.round(result.main.temp - 273.15)}°c`
    let humidity = document.querySelector('.humidity')
    humidity.innerText = ` humidity: ${result.main.humidity}g.m-3`
    cityInput.value = ''
}
let displayWeather = document.querySelector('.dButton')
displayWeather.addEventListener('click', weatherDisplay)
function getCity (){
    let city = cityInput.value
    let newCity= `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f7604e9038003f77b30925b6d3a7b62e`;
    return newCity
}
