import { useState } from 'react';

const Search = ({ inputValue }) => {
    const [location, setLocation] = useState('');

    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!location) {
            alert('city needed...')
        } else {
            inputValue(location);
            setLocation('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='search-engine'>
            <h3>See venues in different cities!</h3>
            <input type="text" name="search" placeholder='Search city..'  autoComplete='off' value={location}
          onChange={handleChange}/>
          <button><h4>Search</h4></button>
        </form>
    )
}

export default Search
