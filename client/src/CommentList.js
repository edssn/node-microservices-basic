import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentList extends Component {

    render () {
        return <ul>
            {
                this.props.comments.map(comment => {
                    let content = comment.content; 
                    if (comment.status === 'pending') {
                        content = 'This comment is awaiting moderation'; 
                    } 
                    if (comment.status === 'rejected') {
                        content = 'This comment has been rejected'; 
                    } 
                    return <li key={comment.id}>{content}</li>
                })
            }
        </ul>  
      }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList;