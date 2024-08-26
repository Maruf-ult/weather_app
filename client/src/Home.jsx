import axios from 'axios';
import { useState } from 'react';
import clear from './images/clear.png';
import clouds from './images/clouds.png';
import drizzle from './images/drizzle.png';
import mist from './images/mist.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import wind from './images/wind.png';
import humidity from './images/humidity.png';

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const postCity = async () => {
    try {
      console.log('Posting city:', city);
      const response = await axios.post('http://localhost:3000/api/city', { city });
      const res = response.data;
      console.log('City response:', res);

      // Fetch weather data after posting the city
      const weatherResponse = await axios.get('http://localhost:3000/api/weather', { params: { city: res.newCity.city } });
      console.log('Weather response:', weatherResponse.data);
      setWeather(weatherResponse.data.data);
    } catch (error) {
      console.log('Error:', error);
      alert(error);
    }
  };

  const eventHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
    <div className="h-screen w-screen bg-gradient-to-r from-teal-100 to-blue-200 flex items-center justify-center">
      <div className='bg-green-400 shadow-lg rounded-lg p-6 w-96'>
        <div className='flex justify-center mb-6'>
          <input 
            className='border border-gray-300 p-2 rounded-md w-full' 
            onChange={eventHandler} 
            type="text" 
            value={city} 
            placeholder="Enter city" 
          />
          <button 
            onClick={postCity} 
            className="bg-blue-500 text-white p-2 ml-2 rounded-md hover:bg-blue-600"
          >
            See
          </button>
        </div>
  
        {weather && (
          <div className='text-center'>
            {weather.weather === 'Clouds' && (
              <img src={clouds} alt="Cloudy" className="mx-auto mb-10" />
            )}
            {weather.weather === 'Clear' && (
              <img src={clear} alt="Clear" className="mx-auto mb-10" />
            )}
            {weather.weather === 'Drizzle' && (
              <img src={drizzle} alt="Drizzle" className="mx-auto mb-10" />
            )}
            {weather.weather === 'Mist' && (
              <img src={mist} alt="Mist" className="mx-auto mb-10" />
            )}
            {weather.weather === 'Rain' && (
              <img src={rain} alt="Rain" className="mx-auto mb-10" />
            )}
            {weather.weather === 'Snow' && (
              <img src={snow} alt="Snow" className="mx-auto mb-10" />
            )}
            <p className='text-lg -mt-10 '>Temperature: {weather.temp}°C</p>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex flex-col items-center'>
                <img src={humidity} alt="Humidity" className="w-6 h-6 mb-2" />
                <p>Humidity: {weather.humidity}%</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={wind} alt="Wind" className="w-6 h-6 mb-2" />
                <p>Wind Speed: {weather.windspeed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  
  
  );
}

export default Home;
