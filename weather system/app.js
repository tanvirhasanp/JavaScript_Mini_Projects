const inputText = document.getElementById('inputText')
const weatherBtn = document.getElementById('btn')
const weatherDetails = document.getElementById('weather-details')

function getWeatherTask() {
  
    const inputTextValue = inputText.value

    if (inputTextValue !== '') {
        const apiKey = `11182b016e13cdb3bad952ccae11168b`
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputTextValue}&appid=${apiKey}&units=metric` 

        weatherDetails.innerHTML = '' 

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const description = data.weather[0].description
                const humidity = data.main.humidity
                const temp = data.main.temp
                const wind = data.wind.speed

                weatherDetails.innerHTML = `
                    Description : ${description} <br>
                    Temperature : ${temp} °C<br>
                    Humidity : ${humidity}% <br>
                    Wind Speed : ${wind} m/s
                `
            })
            .catch(error => {
                weatherDetails.innerHTML = `City not found or API error.`
            })
    } else {
        alert(`Enter a name first`)
    }
}

weatherBtn.addEventListener('click', getWeatherTask)
       
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getWeatherTask() 
    }
})
