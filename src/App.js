import { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"
import Projekt from "./Projekt/Projekt"
import "./FontAwsomeIcons/FontAwsome"
import AboutMe from "./AboutMe/AboutMe"




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
  );
}
}

export default App;
