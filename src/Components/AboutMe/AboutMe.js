import React from "react"
import "../AboutMe/AboutMe.css"
import myImage from "../../Images/MyImage.jpg"



const aboutme = () => {
    return <div className="AboutMe">
     <img className="MyImage" src={myImage} alt="Myimage"></img>
     <div className="AboutText">
    <h1 className="AboutText1">About me</h1>
    <p className="AboutText2">Hi, I'am Andela, I'am 25 years old. I'am pasionate about learning new things and coding is so amazing, because there's always more to learn! I am always ready for new challenges and I am looking forward to it! 
</p>
</div>
    </div>
};


export default aboutme;