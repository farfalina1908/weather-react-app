import React from "react";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let maxTemperature=Math.round(props.data.temperature.maximum);
        return `${maxTemperature}°`;
    }

    function minTemperature() {
        let minTemperature=Math.round(props.data.temperature.minimum);
        return `${minTemperature}°`;
    }

    function day() {
        let date=new Date(props.data.time * 1000);
        let day = date.getDay();
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }

    return (
        <div>
              <div className="WeatherForcast-day">
            {day()} 
            </div>
            <img src={props.data.condition.icon_url} alt={props.data.condition.icon} width={46} height={46}/>
            {/* <WeatherIcon code={forecast[0].condition.icon}  size={36}/> */}
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                  
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
          
           

       
    )
}