
## Prerequisites

Before running the app, ensure you have the following installed:

- Python 3.x
- Flask
- An account on [WeatherAPI](https://www.weatherapi.com/) to obtain an API key.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. **Create a virtual environment** (optional but recommended):

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # For Linux/Mac
    venv\Scripts\activate  # For Windows
    ```

3. **Install the required Python packages**:

    ```bash
    pip install -r requirements.txt
    ```


4. **Set up your WeatherAPI key**:

    - Create a `.env` file in the root directory and add your WeatherAPI key:

    ```
    API_KEY=your_weatherapi_key
    ```

5. **Run the Flask app**:

    ```bash
    python app.py
    ```

6. **Access the app**:

    Open your browser and navigate to `http://127.0.0.1:5000/` to see the weather app in action.

## How to Use

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The app will display the current temperature, weather condition, humidity, and wind speed for the selected city.

## Screenshots

### Dark Mode Interface

![Dark Mode Screenshot](/images/image1.png)

## Technologies Used

- **Flask**: Python web framework used to build the backend.
- **HTML/CSS/JavaScript**: Frontend technologies for building a responsive and interactive UI.
- **WeatherAPI**: External API used for fetching real-time weather data.
- **dotenv**: To handle environment variables securely.

## Environment Variables

This project uses a `.env` file to store the WeatherAPI key. Make sure to add your API key in the following format:

