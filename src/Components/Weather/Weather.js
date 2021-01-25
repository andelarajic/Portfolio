import React, {useState} from "react"
import axios from 'axios';
import "../Weather/Weather.css"

const Weather = () => {
    var [temperature, setTemperature] = useState("");
    var [city, setCity] = useState("");
    var [desc, setDesc] = useState("");
    var [show, setShow] = useState(false);

    const getWeatherData = (city) => {
        axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e0e9386da1077c731a4790d52287872a`
        })
        .then((response) => {
            setCity(city)
            var temp = response.data.main.temp - 273.15
            setTemperature(Math.round((temp) * 100) / 100);
            setDesc(response.data.weather[0].main);
            setShow(true);
        })
        .catch((error) => {
            setShow(false)
        });
    };
   
    function showTemp() {
        if(show){
            return (
                <div>
                    <h1 className="City">{city}</h1>
                    <h2 className="Temp">{temperature} ℃ </h2>
                    <h3 className="Desc">{desc}</h3>
                </div>
            )
        }
    }

    return (
        <div className="Weather">
       <div className="Card">
                    <input className="Input1" type="text" placeholder="Enter Location" onChange={(e) => getWeatherData(e.target.value)} />
                    {showTemp()}
                </div>
                </div>
    )
};

export default Weather;