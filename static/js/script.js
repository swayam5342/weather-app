document.getElementById('searchBtn').addEventListener('click', async function () {
    const city = document.getElementById('cityInput').value;

    if (city) {
        const response = await fetch('/get_weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city }),
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('weatherIcon').src = data.current.condition.icon;
            document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
            document.getElementById('cityName').textContent = data.location.name;
            document.getElementById('humidity').textContent = `${data.current.humidity}%`;
            document.getElementById('windSpeed').textContent = `${data.current.wind_kph} km/h`;
        } else {
            alert('City not found');
        }
    } else {
        alert('Please enter a city name');
    }
});
