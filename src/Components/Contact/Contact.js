import React from "react"
import "../Contact/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollUpButton from "react-scroll-up-button";



const contact = () => {
    return <div className="Contact">
        <h1>Ok, let's create <br />something great</h1>
        <p>If you like my work and have some cool project to work on, contact me through social sites listed below.</p>
        <section className="icons">
            <a className="active" href="https://www.linkedin.com/in/andelarajic/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" /></a>
            <a className="active" href="https://github.com/andelarajic">
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" /></a>
            <a className="active" href="https://twitter.com/AndjelijaRajic">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" /></a>
                <ScrollUpButton />
        </section>
    </div>
};


export default contact;
