import React from "react"
import "./Projekt.css"
import image from "../Images/Project1.jpg"
import myWork from "../Images/Project2.jpg"
import myProject from "../Images/Project3.jpg"

const projekt = () => {
    return <div className="Project">
 <h1 className="Text">Mario</h1>
 <p className="AboutP">Tu cu da pisem nesto oprojektu</p>
 <img className="Image" src={myWork} alt="Game websida"></img>
  <h1 className="Text">Hotel Marina</h1>
  <p className="AboutP">Tu cu da pisem nesto oprojektu</p>
  <img className="Image" src={myProject} alt="Hotel Marina"/>
  <h1 className="Text">Notebook</h1>
  <p className="AboutP">Tu cu da pisem nesto oprojektu</p>
  <img className="Image" src={image} alt="Notebook"/>
    </div>
};




export default projekt;
