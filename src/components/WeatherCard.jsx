import React from "react"


function WeatherCard({city,temperature,conditions,warning}) {
    let emoji = null;
    if(conditions=='sunny'){
        emoji = "☀️";
    }
    else if(conditions=='rainy'){
        emoji = "🌧️"
    }
    else if (conditions == "cloudy"){
        emoji = "☁️"
    }
  return (
    <>
      <p>{city} {temperature}°C {emoji}</p>
      {warning !=undefined&& <h2>Ostrzeżenie: {warning}</h2>
        }
    </>
  )
}

export default WeatherCard