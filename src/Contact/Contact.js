import React from "react"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const contact = () => {
    return <div className="Contact">
    <h1>Ok, let's create <br/>something great</h1>
    <p>If you like my work and have some cool project to work on, contact me through social sites listed below.</p>
    <FontAwesomeIcon className="Icons" icon={['fab', 'linkedin']} size="3x"/>
    <FontAwesomeIcon className="Icons" icon={['fab', 'github']} size="3x"/>
    <FontAwesomeIcon className="Icons" icon={['fab', 'twitter']} size="3x"/>
    </div>
};


export default contact;
