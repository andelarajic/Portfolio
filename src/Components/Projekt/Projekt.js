import React from "react"
import "../../Components/Projekt/Projekt.css"
import image from "../../Images/Project1.jpg"
import myWork from "../../Images/Project2.jpg"
import myProject from "../../Images/Project3.jpg"


const projekt = () => {
    return <div className="Project">
 <h1 className="Text">Gaming History!</h1>
 <hr className="hr"/>
 <p className="AboutP">Gaming history is a responsiv website about games that were popular such as Super Mario and Zelda.</p>
 <img className="Image" src={myWork} alt="Game websida"></img>
 <hr className="hr2"/>
  <h1 className="Text">Hotel Marina</h1>
  <hr className="hr"/>
  <p className="AboutP"> This is an informative side where you can read more about a hotel in Dubai.</p>
  <img className="Image" src={myProject} alt="Hotel Marina"/>
  <hr className="hr2"/>
  <h1 className="Text">Quire</h1>
  <hr className="hr"/>
  <p className="AboutP">Quire is a webbased noteapp. The app can write, print, save and delete small notes when needed. All notes is saved in local storage.</p>
  <img className="Image" src={image} alt="Notebook"/>
    </div>
};




export default projekt;
