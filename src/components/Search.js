import { useState } from 'react';

const Search = ({ getPosts, getWeather }) => {
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city) {
            alert('city needed...')
        } else {
            getPosts(city);
            getWeather(city);
            setCity('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='search-engine'>
            <h3>See venues in different cities!</h3>
            <input type="text" name="search" placeholder='Search city..'  autoComplete='off' value={city}
          onChange={handleChange} />
          <button><h4>Search</h4></button>
        </form>
    )
}

export default Search
