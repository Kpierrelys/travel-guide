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
const urlForPhotos = 'https://api.foursquare.com/v2/venues/'
// OpenWeather Info
// const openWeatherKey = '242d01c20d75737283a65b56149f79d9';
// const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
const [city, setCity] = useState(null ? null : []);
const [posts, setPost] = useState([]);
// const [venuePhotos, setVenuePhotos] = useState([])

const inputValue = (location) => {
  setCity([location]);
};

useEffect(() => {
  const getPosts = async () => {
    const urlToFetch =  url + city + '&limit=4&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20210616';
    try {
      const res = await axios.get(urlToFetch);
      const data = res.data;
      // console.log(data.response.groups[0].items.map(item => item.venue));
      setPost(data.response.groups[0].items.map(item => item.venue));
    } catch (error) {
      console.log(error)
    }
  }
  getPosts();
}, [city]);

// console.log(posts)
// WORKING ON SETTING UP IMAGES

// useEffect(() => {
//   posts.map(post => {
//     const urlToFetch = urlForPhotos + post.id + '?near=' + city + '&limit=2&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20210616';
//     console.log(urlToFetch)
//     const getPhotos = async() => {
//       const res = await axios.get(urlToFetch);
//       const data = res.data;
//       console.log(data);
//       const prefix = data.response.venue.photos.groups[0].items[0].prefix;
//       const suffix = data.response.venue.photos.groups[0].items[0].suffix;
//       const photo = prefix + '300x300' + suffix;
//       setVenuePhotos(photo)
//       console.log(venuePhotos)
//     }
//     getPhotos()
//   });
// }, [posts, city])


// useEffect(() => {
//   const photoId = posts.map(post => post.id)
//   console.log(photoId)
//   const getPhotos = async() => {
//     const urlToFetch = urlForPhotos + photoId[0] + '?near=' + city + '&limit=4&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20210616';
//     console.log(urlToFetch)
//     try {
//       const res = await axios.get(urlToFetch);
//       const data = res.data
//       console.log(data)
//       const prefix = data.response.venue.photos.groups[0].items[0].prefix;
//       const suffix = data.response.venue.photos.groups[0].items[0].suffix;
//       const photo = prefix + '300x300' + suffix;
//       console.log(photo);
//       setVenuePhotos(photo);
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   getPhotos()
// }, [posts, city]);



  return (
    <div >
      <Logo />
      <Search inputValue={inputValue} />
      <Cards posts={posts} />
    </div>
  );
}

export default App;
