
const Temperature = ({ weather }) => {
    const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(weather);

    return (
        <div className='container-weather card-weather'>
            <h3>{weekDays[(new Date()).getDay()]}</h3>
            <p>Temperature : {kelvinToFahrenheit(weather.main.temp) + '\xB0' + 'F'}</p>
            <p>Condition: {weather.weather[0].description}</p>
            {<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />}
        </div>
    )
}

export default Temperature
