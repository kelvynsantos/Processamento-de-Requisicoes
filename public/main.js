const weatherDisplay = document.querySelector('.weather')
const weatherForm = document.querySelector('#weather-form')
const cityInput = document.querySelector('#city-input')

// Busca dados meteorológicos da API
const fetchWeather = async (city) => {
  const url = `/api?q=${city}`

  const res = await fetch(url)
  const data = await res.json()

  if (data.cod === '404') {
    alert('Cidade não encontrada')
    return
  }

  if (data.cod === 401) {
    alert(' API Key Invalida')
    return
  }

  const displayData = {
    city: data.name,
    temp: kelvinToFahrenheit(data.main.temp),
  }

  addWeatherToDOM(displayData)
}

// Add display data para DOM
const addWeatherToDOM = (data) => {
  weatherDisplay.innerHTML = `
    <h1>Tempo em  ${data.city}</h1>
    <h2>${data.temp} &deg;F</h2>
  `
  cityInput.value = ''
}

// Converter Kelvin para Celsius
const kelvinToFahrenheit = (temp) => {
  return Math.ceil((temp - 273.15) * 9)
}

// Event listener for form submission
weatherForm.addEventListener('Enviar', (e) => {
  e.preventDefault()

  if (cityInput.value === '') {
    alert('Por favor insira uma cidade')
  } else {
    fetchWeather(cityInput.value)
  }
})

// Initial fetch
fetchWeather('Miami')