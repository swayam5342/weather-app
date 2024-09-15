document.getElementById('weatherForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const city = document.getElementById('cityInput').value;
    
    const response = await fetch('/get_weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
        document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
            <p>Temperature: ${data.current.temp_c} °C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind: ${data.current.wind_kph} kph</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = `<p>${data.error}</p>`;
    }
});
