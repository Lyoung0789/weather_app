import React from 'react'


function kToF(kelvin){
    // debugger
    let degrees = (kelvin-273.15) * (9/5) + 32
    return degrees.toFixed(2)
}

function Weather(props){

    return(
        <div>
            The Weather is:
            <div>
                <div className="current-temp">Current Temperature: {kToF(props.weather.main.temp)}F</div>
                <div className="feels-like">Feels Like: {kToF(props.weather.main.feels_like)}F</div>
                <div className="humidity">Humidity: {props.weather.main.humidity}%</div>
                <div className="cloud">Cloudiness: {props.weather.clouds.all}%</div>
                <div className="wind">Wind Speed: {props.weather.wind.speed}m(meters)/s</div>
            </div>
        </div>
    )
}

export default Weather