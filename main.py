from flask import Flask, render_template, jsonify, request
import requests
from  dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__)

# Replace with your WeatherAPI key
API_KEY = os.getenv('API_KEY')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_weather', methods=['POST'])
def get_weather():
    city = request.json['city']
    url = f'http://api.weatherapi.com/v1/current.json?key={API_KEY}&q={city}&aqi=no'
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'City not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
