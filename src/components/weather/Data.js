import React, {useState, useEffect} from 'react'
import Moment from "react-moment";
import Register from "../content/register.json"; 
import "../../App.scss";  

const WeatherData = ({apiData}) => {

    // WEATHER IMAGE LOOP
    let [image, setImage] = useState(""); 
    useEffect(() => {
    
        for(let i=0;i<apiData.daily.length;i++){
    
            if(apiData.daily[i].weather[0].main == "Clear") {
                setImage(Register.weather_forecast[0].sun)
            } 
            if (apiData.daily[i].weather[0].main == "Clouds") {
                setImage(Register.weather_forecast[0].cloudy)
            } 
            if (apiData.daily[i].weather[0].main == "Rain") {
                setImage(Register.weather_forecast[0].rain)
            }
            if (apiData.daily[i].weather[0].main == "Sun-rain") {
                setImage(Register.weather_forecast[0]['sun-rain'])
            }
            // console.log(apiData.daily[0].weather[0].main); 
            // console.log(apiData.daily[i].weather[0].main)
            // console.log(Register.weather_forecast[0].sun)
        } // END LOOP
    }, []); // END USEFFECT
    
    return (
    <>
        <div id="weatherContainer">
            {apiData.daily.map((data,index) => (
                <>
                <figure>
                    <div id="day" key={"day" + index}>
                        <h4><Moment unix format="dddd">
                            {data.dt}
                        </Moment></h4>
                    </div>
                    <div id="weatherIcon">
                       <img src={image} />
                    </div>
                    <div id="tempDay" key={"tempDay" + index}>
                        <p>{Math.round(data.temp.day)}</p>
                    </div>
                </figure>
                </>
            )
            )}
        </div>
    </>
    ); // END RETURN
} // END WEATHER DATA 

export default WeatherData; 