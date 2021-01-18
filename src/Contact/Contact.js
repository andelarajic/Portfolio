import React from "react"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const contact = () => {
    return <div className="Contact">
    <h1>Ok, let's create <br/>something great</h1>
    <p>If you like my work and have some cool project to work on, contact me through social sites listed below.</p>
    <section className="icons">
			<a className="active" href="https://github.com/">
			<FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/></a>
		    <a className="active" href="https://www.instagram.com/">
			<FontAwesomeIcon icon={['fab', 'github']} size="3x"/></a>
			<a className="active" href="https://www.google.com/search?q=media+queries&rlz=1C5CHFA_enSE904SE915&oq=media+q&aqs=chrome.1.69i57j0l5j0i395l4.4359j1j15&sourceid=chrome&ie=UTF-8">
			<FontAwesomeIcon icon={['fab', 'twitter']} size="3x"/></a>
            </section>
    </div>
};


export default contact;
