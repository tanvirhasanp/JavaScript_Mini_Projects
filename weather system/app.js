const inputText = document.getElementById('inputText')
const weatherBtn = document.getElementById('btn')
const weatherDetails = document.getElementById('weather-details')

function getWeatherTask() {
  
    const inputTextValue = inputText.value

    if (inputTextValue !== '') {
        const apiKey = `11182b016e13cdb3bad952ccae11168b`
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputTextValue}&appid=${apiKey}&units=metric` 

        weatherDetails.innerHTML = '<span class="loading"></span>Loading weather data...'
        weatherDetails.style.display = 'block'

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const description = data.weather[0].description
                const humidity = data.main.humidity
                const temp = data.main.temp
                const wind = data.wind.speed
                const cityName = data.name
                const country = data.sys.country

                
                let weatherIcon = '🌤️'
                if (description.includes('rain')) weatherIcon = '🌧️'
                else if (description.includes('cloud')) weatherIcon = '☁️'
                else if (description.includes('clear')) weatherIcon = '☀️'
                else if (description.includes('snow')) weatherIcon = '❄️'
                else if (description.includes('thunderstorm')) weatherIcon = '⛈️'

                weatherDetails.innerHTML = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">${weatherIcon}</div>
                        <h3 style="margin: 0; color: #0984e3;">${cityName}, ${country}</h3>
                    </div>
                    <div class="weather-info">
                        <div><strong>🌡️ Temperature:</strong> ${temp}°C</div>
                        <div><strong>📝 Description:</strong> ${description.charAt(0).toUpperCase() + description.slice(1)}</div>
                        <div><strong>💧 Humidity:</strong> ${humidity}%</div>
                        <div><strong>💨 Wind Speed:</strong> ${wind} m/s</div>
                    </div>
                `
                inputText.value = ''
            })
            .catch(error => {
                weatherDetails.innerHTML = `
                    <div class="error-message">
                        <strong>❌ Error:</strong> City not found or API error. Please check the city name and try again.
                    </div>
                `
            })
    } else {
        alert(`Please enter a city name first`)
    }
}

weatherBtn.addEventListener('click', getWeatherTask)
       
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getWeatherTask() 
    }
})
