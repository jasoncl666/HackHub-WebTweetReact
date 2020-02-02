import React, { Component } from 'react';

class TweetPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handlePost = this.handlePost.bind(this)
    }

    handleTextChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handlePost() {

        console.log('Post button clicked')
        
        this.props.handleNewPost(this.state.content)
        this.setState({
            content: ''
        })
    }

    render() {

        const {
            avatar
        } = this.props

        return (
            <div className="tweet">
                <form id="tweet-form">
                    <div className="row">
                        <img className="avatar-sm v-top" src={avatar} alt="avatar" />
                        <input className="input-tweet" placeholder="What's up?" id="tweet-content" value={this.state.content} onChange={this.handleTextChange}></input>
                    </div>
                    <div className="row tweet-actions">
                        {/* <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only /> */}
                        <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                        <button className="btn-primary" type="button" id="post-btn" disabled={this.state.content? '' : 'disabled'} onClick={this.handlePost}>Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TweetPost;