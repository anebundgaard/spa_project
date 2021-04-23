import React, {useState, useEffect} from 'react'
import Moment from "react-moment";
import Register from "../content/register.json"; 
import "../../App.scss";  

const WeatherData = ({apiData}) => {

    // WEATHER IMAGE LOOP
    const [image_cloud, setImage_cloud] = useState(""); 
    const [image_clear, setImage_clear] = useState(""); 
    const [image_rain, setImage_rain] = useState(""); 
    const [image_sunrain, setImage_sunrain] = useState("");
    const weatherArray = [];

    //useEffect(() => {
        
        for(let i=0;i<apiData.daily.length;i++){
    
            if(apiData.daily[i].weather[0].main == "Clear") {
                weatherArray.push(Register.weather_forecast[0].sun)
                //setImage_clear(Register.weather_forecast[0].sun)
            } 
            if (apiData.daily[i].weather[0].main == "Clouds") {
                weatherArray.push(Register.weather_forecast[0].cloudy)
                //setImage_cloud(Register.weather_forecast[0].cloudy)
            } 
            if (apiData.daily[i].weather[0].main == "Rain") {
                weatherArray.push(Register.weather_forecast[0].rain)
                //setImage_rain(Register.weather_forecast[0].rain)
            }
            if (apiData.daily[i].weather[0].main == "Sun-rain") {
                weatherArray.push(Register.weather_forecast[0].sunrain)
                //setImage_sunrain(Register.weather_forecast[0]['sun-rain'])
            }
            //console.log(apiData.daily[i].weather[0].main); 
            //console.log(setImage)
            // console.log(apiData.daily[i].weather[0].main)
            // console.log(Register.weather_forecast[0].sun)
            //console.log(weatherArray[i])
        } // END LOOP
        console.log("hej")
    //}, []); // END USEFFECT



    //console.log(Register.weather_forecast[0].cloudy)
    
    return (
    <>
        <div id="weatherContainer">
            {apiData.daily.map((data,index) => (
                <>
                {console.log("hej2")}
                <figure>
                    <div id="day" key={"day" + index}>
                        <h4><Moment unix format="dddd">
                            {data.dt}
                        </Moment></h4>
                    </div>
                    <div id="weatherIcon">
                       <img src={weatherArray[index]} />
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