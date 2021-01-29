import React from "react"
import "../../Components/Projekt/Projekt.css"
import image from "../../Images/Project1.jpg"
import myWork from "../../Images/Project2.jpg"
import myProject from "../../Images/Project3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const projekt = () => {
    return (
    <div id="projekt" className="Project">
 <h1 className="Text">Gaming History!</h1>
 <hr className="hr"/>
 <p className="AboutP">Gaming history is a responsiv website about games that were popular such as Super Mario and Zelda.</p>
 <img className="Image" src={myWork} alt="Game websida"></img>
 <a className="Source" href="https://github.com/andelarajic/SuperMario">
			<FontAwesomeIcon icon={['fab', 'github']}/>Source</a>
 <hr className="hr2"/>
  <h1 className="Text">Hotel Marina</h1>
  <hr className="hr"/>
  <p className="AboutP"> This is an informative side where you can read more about a hotel in Dubai.</p>
  <img className="Image" src={myProject} alt="Hotel Marina"/>
  <a className="Source" href="https://github.com/andelarajic/Hotel-Marina">
			<FontAwesomeIcon icon={['fab', 'github']}/>Source</a>
  <hr className="hr2"/>
  <h1 className="Text">Quire</h1>
  <hr className="hr"/>
  <p className="AboutP">Quire is a webbased noteapp. The app can write, print, save and delete small notes when needed. All notes is saved in local storage.</p>
  <img className="Image" src={image} alt="Notebook"/>
  <a className="Source" href="https://github.com/andelarajic/fe20tp1_Ink">
			<FontAwesomeIcon icon={['fab', 'github']}/>Source</a>
    </div>
    )};




export default projekt;
