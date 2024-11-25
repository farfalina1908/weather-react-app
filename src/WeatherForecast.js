import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
      }

    let apiKey="08d440tdfdcb031ao9979a9366c66028";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
   
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);

return (
    <div className="WeatherForecast">
        <div className="row">
        <div className="col">
            <div className="WeatherForcast-day">
              Thue  
            </div>
            
            <WeatherIcon code="01d" size={36}/>
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19°</span>
                  
                <span className="WeatherForecast-temperature-min">10°</span>
            </div>
           

        </div>
        </div>

    </div>
)
}