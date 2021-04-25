import useFetch from "react-fetch-hook";
// IMPORT OF COMPONENTS
import WeatherData from "./Data"; 
// IMPORT OF STYLESHEETS
import "../../App.scss";

function WeatherApp() {
    const {isLoading,data} = useFetch("https://api.openweathermap.org/data/2.5/onecall?lat=56.162939&lon=10.203921&exclude={current,minutely,hourly,alert}s&units=metric&appid=5cc6e0bf1f3f191db1b19ce522d3d79b")

    return isLoading ? (
        <h3 id="loadingResponse">Loading weather forecast...</h3>
    ):(
        <>
            <WeatherData apiData={data}/>
        </>
    ) // END RETURN
} // END WEATHER APP FUNCTION
export default WeatherApp; 