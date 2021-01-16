import { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"
import Projekt from "./Projekt/Projekt"
import "./FontAwsomeIcons/FontAwsome"




class App extends Component {
  render () {
  return (
    <div>
    <Header/>
    <Portfolio/>
    <Projekt/>
    <Contact/>
    </div>
  );
}
}

export default App;
