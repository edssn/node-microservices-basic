import React, { Component } from 'react';
import axios from 'axios';

import PostCreate from './PostCreate'
import PostList from './PostList'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    fetchPosts = async() => {
        const res = await axios.get('http://localhost:4002/posts');
        this.setState({ posts: res.data });
    }

    async componentDidMount() {
        await this.fetchPosts();
    }

    render () {
        return <div className="container">
            <h1>Create Post</h1>
            <PostCreate fetchPosts={this.fetchPosts}/>
            <hr />
            <h1>Posts</h1>
            <PostList posts={this.state.posts} fetchPosts={this.fetchPosts}/>
        </div>
      }
}

export default App;