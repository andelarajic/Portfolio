import React, {useState} from "react"
import axios from 'axios';
import "../../Components/Header/Header.css"



const Header = () => {

    const [temperature, setTemperature] = useState("");
    const [city, setCity] = useState("");
    const [desc, setDesc] =useState("");

function input() {

    
}

    const getWeatherData = (city) => {
        axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e0e9386da1077c731a4790d52287872a`
        })
        .then((response) => {
    console.log(response.data.main.temp);
            setTemperature(response.data.main.temp - 273.15);
            setDesc(response.data.weather[0].main);
        })
        .catch((error) => {
            console.log(error);
        });
    };
   
    return (
        <div className="Header1">
    <div className="Weather">
    <div className="card">
    <div className="Input" >
    <input className="Input1" type="text" placeholder="Enter Location" onChange={(e) =>setCity(e.target.value)}/>
    <button className="Input2" onClick={() => {
        getWeatherData(city);
    }}> Get Weather</button>
    </div>
   <h1 className="City">{city}</h1>
    <h2 className="Temp" value="" onChange={(e) =>setTemperature(e.target.value)}>{Math.round(temperature * 100) / 100} ℃ </h2>
    <h3 className="Desc">{desc}</h3>
    </div>
    </div>
    <h1 className="HeaderH1">Andela Rajic</h1>
    <h2 className="Headerh2">Hi, I'm a Front-end Developer. I produce elegant,performant and accessible website.</h2>
    <button className= "button1">Check my work</button>
    </div>
    
    )
};


export default Header;