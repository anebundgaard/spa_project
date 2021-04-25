import React from 'react'
import Moment from "react-moment";
// IMPORT OF COMPONENTS
import Register from "../content/register.json"; 
// IMPORT OF STYLESHEETS
import "../../App.scss";  

const WeatherData = ({apiData}) => {

    // WEATHER IMAGE LOOP
    const weatherArray = [];
        
    for(let i=0;i<apiData.daily.length;i++){
    
        if(apiData.daily[i].weather[0].main == "Clear") {
            weatherArray.push(Register.weather_forecast[0].sun)
        } 
        if (apiData.daily[i].weather[0].main == "Clouds") {
            weatherArray.push(Register.weather_forecast[0].cloudy)
        } 
        if (apiData.daily[i].weather[0].main == "Rain") {
            weatherArray.push(Register.weather_forecast[0].rain)
        }
        if (apiData.daily[i].weather[0].main == "Sun-rain") {
            weatherArray.push(Register.weather_forecast[0].sunrain)
        }
    } // END LOOP
    
    return (
        <>
            <div id="weatherContainer">
                <h2>Weather Forecast</h2>
                
                {apiData.daily.map((data,index) => (
                <>
                    <figure>
                        <div id="day" key={"day" + index}>
                            <h4><Moment unix format="dddd">
                                {data.dt}
                            </Moment></h4>
                        </div>
                    
                        <div id="weatherIcon">
                            <img src={weatherArray[index]} alt="Weather forecast icons" />
                        </div>
                    
                        <div id="tempDay" key={"tempDay" + index}>
                            <p>{Math.round(data.temp.day)}</p>
                        </div>
                    </figure>
                </>
                ))}
            </div>
        </>
    ); // END RETURN
} // END WEATHER DATA 

export default WeatherData; 