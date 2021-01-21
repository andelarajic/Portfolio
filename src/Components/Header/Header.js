import { Component } from 'react';
import React from "react"
import axios from 'axios';
import "../../Components/Header/Header.css"
import Post from "../Post/Post"

class Header extends Component {
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });

    }
    render () {
    return  (
    <div className="Header1">
     <Post/>
    <h1 className="HeaderH1">Andela Rajic</h1>
    <h2>Hi, I'm a Front-end Developer. I produce elegant,performant and accessible website.</h2>
    <button className= "button1">Check my work</button>
    </div>
    )
}};


export default Header;