import { Component } from 'react';
import React from "react"
import axios from 'axios';
import "../../Components/Header/Header.css"
import Post from "../Post/Post"

class Header extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 2);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Andela'
                    }
                })
                this.setState ({posts: updatedPosts});
               // console.log(response);
            });

    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post title = {post.title} author = {post.author}/>
        })
    return  (
        <div>
        <section className="Posts">
            {posts}
        </section>
    <div className="Header1">
    <h1 className="HeaderH1">Andela Rajic</h1>
    <h2>Hi, I'm a Front-end Developer. I produce elegant,performant and accessible website.</h2>
    <button className= "button1">Check my work</button>
    </div>
    </div>
    
    )
}};


export default Header;