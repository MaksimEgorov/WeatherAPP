import React from 'react';

const Weather = (props) => {
    return (
        <div>
            {props.city && 
                <div className="weather__parameters">
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp} &#176;C</p>
                    <p>Pressure: {props.pressure} hPa</p>
                    <p>Sunset: {props.sunset}</p>
                </div>
            }
            <p className="weather__parameters-error">{props.error}</p>
        </div>
    )
}

export default Weather;