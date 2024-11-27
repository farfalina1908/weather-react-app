import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css"

export default function WeatherInfo(props) {
    return (

        <div className="WeatherInfo" >
       <div className="row">
       <div className="col-6">
      
            <h1>{props.data.city}</h1>
        <ul>
            <li>
                
                <FormattedDate date={props.data.date}/>, <span className="text-capitalize">{props.data.description}</span>
               
            </li>
            <li>Humidity: <strong>{props.data.humidity}%</strong>, Wind: <strong>{props.data.wind} km/h</strong></li>
            {/* <li>Wind: {props.data.wind} km/h</li> */}

            {/* <li className="text-capitalize">{props.data.description}</li> */}
        </ul>
        </div>
        {/* <div className="row mt-3">  */}
        <div className="col-lg-6 col-md-6 col-sm-8 ">
        
            <div className="temperature-container d-flex justify-content-end"> 
                <div>
            <WeatherIcon code={props.data.icon} alt={props.data.description} size={52}/>
                </div>
           
            <div>

<WeatherTemperature celsius={props.data.temperature}/>

        </div>           
        </div>
        </div>
        {/* <div className="col-6">
           
<ul>
          
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
        </ul>
        </div> */}
        </div>
        </div>

    );
}