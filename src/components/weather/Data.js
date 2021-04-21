import React, {useState} from 'react'
import Moment from "react-moment";
import Register from "../content/register.json";  

const WeatherData = ({apiData}) => {

    /*
    console.log(apiData.daily[0].weather[0].main); 
    const [image, setImage] = useState(""); 


        if (apiData.daily.weather.main == "Clear" ) {
            setImage(Register.weather.sun); 
        }
        if (apiData.daily.weather.main == "Clouds" ) {
            setImage(Register.weather.cloudy); 
        }
        if (apiData.daily.weather.main == "Rain" ) {
            setImage(Register.weather.rain); 
        }
    */

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
                        <p>img</p>
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