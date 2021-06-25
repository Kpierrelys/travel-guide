import './App.css';

import { useState } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Cards from './components/Cards';
import Logo from './components/Logo';

// Foursquare API Info
const clientId = 'FLO4KLNU3RU3D2DVZWZLGJIQ1Z3D0LQMVQOVDUKD13XV4BFZ';
const clientSecret = 'NWWHYIYGBEL3QC02RKSY5BDQMCDWRNB35JUYAUGB1Q210CER';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
// const urlForPhotos = 'https://api.foursquare.com/v2/venues/';
// OpenWeather Info
const openWeatherKey = '242d01c20d75737283a65b56149f79d9';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

function App() {

  const [posts, setPost] = useState([]);
  const [weather, setWeather] = useState();

  const getPosts = async (city) => {
        const urlToFetch =  url + city + '&limit=6&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20210616';
        try {
          const res = await axios.get(urlToFetch);
          const data = res.data;
          setPost(data.response.groups[0].items.map(item => item.venue));
        } catch (error) {
        console.log(error)
        }
      }
    
  const getWeather = async (city) => {
    const urlToFetch = weatherUrl + '?q=' + city + '&appid=' + openWeatherKey;
        try {
          const res = await axios.get(urlToFetch);
          const data = res.data;
          setWeather(data);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div >
      <Logo />
      <Search getWeather={getWeather} getPosts={getPosts}/>
      {weather && <Cards posts={posts} weather={weather}/>}
    </div>
  );
}

export default App;
