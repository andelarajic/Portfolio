import { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Projekt from "./Components/Projekt/Projekt"
import "./Components/FontAwsomeIcons/FontAwsome"
import AboutMe from "./Components/AboutMe/AboutMe"
import {Helmet} from "react-helmet"

class App extends Component {
  render() {
    return (
      <div className="Body">
       <Helmet>
      <meta charSet="UTF-8"/>
      <title>Portfilio</title>
      <meta name="description" content="This is a portfolio about me and my skills. Here you will find some projects of mine."/>
      </Helmet>
        <Header />
        <Portfolio />
        <Projekt />
        <AboutMe />
        <Contact />
      </div>

    )
  }
}

export default App;
