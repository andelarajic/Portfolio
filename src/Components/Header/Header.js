import React from "react"
import "../../Components/Header/Header.css"
import Weather from "../Weather/Weather"
import {Link} from 'react-scroll'

const Header = () => {


    return (
 
    <div className="Header">
    <Weather/>
   <h1 className="Headerh1">Andela Rajic</h1>
    <h2 className="Headerh2">Hi, I'm a Front-end Developer. I produce elegant,performant and accessible website.</h2>
    <li><Link className="button1" to="projekt" spy={true} smooth={true}>Check my work</Link></li>
   </div>
)};


export default Header;