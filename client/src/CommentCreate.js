import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class CommentCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          content: '',
        };
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if (this.state.content.length === 0)
            return;

        let {postId} = this.props;
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content: this.state.content
        });
        this.setState({content: ''});
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>New Comment</label>
                        <input
                            value={this.state.content} 
                            onChange={e => this.setState({ content: e.target.value })}
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        ) 
        
      }
}

CommentCreate.propTypes = {
    postId: PropTypes.string.isRequired
}

export default CommentCreate;