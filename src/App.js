import './App.css';

import { useState, useEffect } from 'react';
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
const [venuePhotos, setVenuePhotos] = useState([]);
const [weather, setWeather] = useState();

const getPosts = async (city) => {
      const urlToFetch =  url + city + '&limit=5&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20210616';
      try {
        const res = await axios.get(urlToFetch);
        const data = res.data;
        // console.log(data.response.groups[0].items.map(item => item.venue));
        setPost(data.response.groups[0].items.map(item => item.venue));
      } catch (error) {
        console.log(error)
      }
    }

const getWeather = async (city) => {
  const urlToFetch = weatherUrl + '?q=' + city + '&appid=' + openWeatherKey;
  // console.log(urlToFetch);
      try {
        const res = await axios.get(urlToFetch);
        const data = res.data;
        // console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }


// FETCHING PHOTOS
// useEffect(() => {
//   const pictures = posts.map(post => {
//     const urlToFetch = urlForPhotos + post.id + '?near=' + city + '&limit=2&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20210616';
//     console.log(urlToFetch)
//     const getPhotos = async() => {
//       const res = await axios.get(urlToFetch);
//       const data = res.data;
//       console.log(data);
//       const prefix = data.response.venue.photos.groups[0].items[0].prefix;
//       const suffix = data.response.venue.photos.groups[0].items[0].suffix;
//       const photos = prefix + '300x300' + suffix;
//       console.log(photos)
//       setVenuePhotos([...venuePhotos, photos]);
//       console.log(venuePhotos)
//     }
//     getPhotos()
//   });
//   return pictures
// }, [posts, city])

  return (
    <div >
      <Logo />
      <Search getWeather={getWeather} getPosts={getPosts}/>
      <Cards posts={posts} venuePhotos={venuePhotos} weather={weather}/>
    </div>
  );
}

export default App;
