import React, { Component } from 'react';
import Axios from 'axios';
import { baseUrl } from '../../config';

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

        let that = this;
        
        console.log("New Content: " + this.state.content)

        console.log("token: " + this.props.token)

        Axios.post(baseUrl+"/tweet", {
            content: that.state.content,
            imageUrl: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/'
        }, {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(res => {
            if (res.data.error) {
                console.log(res.data.error)
            } else {
                console.log("Posting tweet: ")
                console.log(res);

                that.setState({
                    content: ""
                })

                that.props.handleNewPost(res.data.tweets)
            }
        })


        this.props.handleNewPost(this.state.content)
        this.setState({
            content: ''
        })
    }

    componentWillUnmount = () => {
        console.log("TweetPost unmounted")
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