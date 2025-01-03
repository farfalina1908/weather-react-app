import React, {useState} from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css"
import WeatherForecast from "./WeatherForecast"

export default function Weather (props) {
   const[city, setCity] = useState(props.defaultCity);
    const[weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt*1000),
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name
    })

   

    }


    function search() {
        const apiKey="a78425defdca5077e5f0280ae5c6e2db";
  
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
       setCity(event.target.value);
    }

    if(weatherData.ready) {
         return (<div className="Weather">
   
        <form onSubmit={handleSubmit}>
        <div className="row">
             <div className="col-9">
                 <input type="search" placeholder="Enter a city..." className="form-control search-input" autoFocus="on" onChange={handleCityChange}/>
             </div>
            <div className="col-3 p-0">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
           
        </div>
           
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
        <footer>
      This project was coded by Olena Berezina and is open-sourced on  {" "}  
         <a
          className="App-link"
          href="https://github.com/farfalina1908/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         GitHub 
        </a>
        {" "}  and hosted on  {" "}  
        <a
          className="App-link"
          href="https://enchanting-dango-f50e89.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
         Netlify 
        </a>
      </footer>
       
    </div>) ;
    } else {
        search();
     return "Loading...";
}
    
}