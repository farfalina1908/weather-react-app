import React, {useState, useEffect} from "react";

import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {

let[loaded, setLoaded]=useState(false);
let[forecast, setForecast]=useState(null);


useEffect(()=>{
    setLoaded(false);
}, [props.coordinates]);

    function handleResponse(response) {
        setLoaded(true);
        setForecast(response.data.daily);
      }

if(loaded) 
{
    console.log(forecast);
     return (
    <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index) {
                if(index < 6) {
                return (
            <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
            </div>)} else {
                return null;
            }

            })  }
            
        </div>
    </div>
)

    
} else {
   
    let apiKey="08d440tdfdcb031ao9979a9366c66028";
    
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
   
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    // `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    return null;
}

   


}