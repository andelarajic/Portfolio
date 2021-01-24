import React, {useState} from "react"
import axios from 'axios';
import "../../Components/Header/Header.css"



const Header = () => {
    const [temperature, setTemperature] = useState("");
    const [city, setCity] = useState("City");
    const [desc, setDesc] =useState("");

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
        <div>
    <div className="Header1">
   
    {Math.round(temperature * 100) / 100} ℃ - {desc}

    <input type="text" value={city} onChange={(e) =>setCity(e.target.value)}/>
    <button onClick={() => {
        getWeatherData(city);
    }}> GET</button>
    <h1 className="HeaderH1">Andela Rajic</h1>
    <h2>Hi, I'm a Front-end Developer. I produce elegant,performant and accessible website.</h2>
    <button className= "button1">Check my work</button>
    </div>
    </div>
    )
};


export default Header;