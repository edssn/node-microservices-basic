import React, { Component } from 'react';
import axios from 'axios';

class PostCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
        };
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if (this.state.title.length === 0)
            return;        

        await axios.post('http://posts.com/posts/create', {
            title: this.state.title
        });

        this.setState({title: ''});
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={this.state.title} 
                        onChange={e => this.setState({ title: e.target.value })}
                        className="form-control"
                    ></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
        );
    }
}

export default PostCreate;