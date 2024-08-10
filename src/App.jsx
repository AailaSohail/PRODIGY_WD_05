import './App.css'
import { useEffect,useState } from 'react';
import axios from "axios";
import Weather from './Weather';
import CurrentWeather from './CurrentWeather';

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const [dataCurrent, setDataCurrent] = useState("");
  const API_KEY = "7c40fbf1565968f73b8c9077393e4676";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
        console.log(position.coords);

      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  const fetchWeather = (latitude, longitude) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        setDataCurrent(response.data);
        setUseCurrentLocation(true);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const fetchCurrentLocationWeather = async () => {
    // Fetch weather data for the current location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
      const dataCurrent = await response.json();
      setDataCurrent(dataCurrent);
      setUseCurrentLocation(true);
    });
    setLocation("");
    setData("");
  };
  
  const searchLocation = (event) => {
    if( event.key == "Enter"){
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data);
        setUseCurrentLocation(false);
      })
      setLocation("");
    }

  };

  return (
<div className="w-full h-full relative">
 <div className="text-center p-4">
  <input type="text" className="py-3 px-4 w-[700px] text-lg rounder-3xl bg-zinc-800 border border-gray-500 text-gray-400 placeholder:text-gray-400 focus:outline-none rounded-xl shadow-md" placeholder='Enter Location' value={location} onChange={(event) => setLocation(event.target.value)} onKeyDownCapture={searchLocation} />
  <button onClick={fetchCurrentLocationWeather} className="ml-4 py-2 px-4 bg-zinc-800  text-white rounded-xl">Use Current Location</button>
 </div>
 { !useCurrentLocation && data && <Weather weatherData={data} />}
 {useCurrentLocation && dataCurrent && <CurrentWeather weatherCurrent={dataCurrent} />}
</div>
  )
}

export default App
