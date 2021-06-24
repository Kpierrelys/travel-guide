import Temperature from "./Temperature";

const Cards = ({ posts, venuePhotos, weather }) => {
    // console.log(weather)
    // console.log(posts)

    return (
        <div>
            {/* <Temperature weather={weather} /> */}
            <ul className='container-list'>
                {posts.map(post => (
                <li className='card' key={post.id}>
                    {/* <img src={venuePhotos} alt="venue image"></img> WORKING ON SETTING UP IMAGES  */}
                    <div className='container'>
                    <h3>{post.name}</h3>
                    <img src={post.categories[0].icon.prefix + 'bg_64' + post.categories[0].icon.suffix} alt='venue icon'/>
                    <p className='address'>Address:</p>
                    <p>{post.location.address}</p>
                    <p>{post.location.city}</p>
                    <p>{post.location.country}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Cards
