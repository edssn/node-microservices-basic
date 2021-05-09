import React, { Component } from 'react';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

class PostList extends Component {

    render() {
        return <div className = "d-flex flex-row flex-wrap justify-content-between" > {
                this.props.posts.map(post => {
                    return ( 
                        <div 
                            className = "card"
                            key = { post.id }
                            style = { { width: '30%', marginBottom: '20px' } } >
                            <div className = "card-body">
                                <h3>{ post.title }</h3> 
                                <CommentList comments = { post.comments } /> 
                                <CommentCreate postId = { post.id } fetchPosts={this.props.fetchPosts} /> 
                            </div> 
                        </div>
                    )
                })
            } 
            </div>
    }
}

export default PostList;