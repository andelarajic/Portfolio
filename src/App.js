import { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Projekt from "./Components/Projekt/Projekt"
import "./Components/FontAwsomeIcons/FontAwsome"
import AboutMe from "./Components/AboutMe/AboutMe"




class App extends Component {
  render () {
  return (
    <div className="Body">
    <Header/>
    <Portfolio/>
    <Projekt/>
    <AboutMe/>
    <Contact/>
    </div> 
    
  )}
}


export default App;
