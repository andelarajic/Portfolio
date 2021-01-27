import React from "react"
import "../../Components/Header/Header.css"
import Weather from "../Weather/Weather"


const Header = () => {


    return (
    <div className="Header">
    <Weather/>
    <h1 className="Headerh1">Andela Rajic</h1>
    <h2 className="Headerh2">Hi, I'm a Front-end Developer. I produce elegant,performant and accessible website.</h2>
    <button className= "button1">Check my work</button>
    </div>
    )};


export default Header;