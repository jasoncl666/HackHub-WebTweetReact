import React, { Component } from 'react';
import Axios from 'axios';
import TweetList from './TweetList';
import TweetItem from './TweetItem';
import ProfilePad from './ProfilePad';

import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';

import userAvatar from '../img/spongebob.png';

class Page extends Component {

    state = {
        tweets: [],
        content: ''
    };

    componentWillMount(){

        const that = this;

        Axios.get('')
        .then((response) => {
            console.log(response);

            that.setState({

                tweets: [] // whatever the response structure it is to get all tweets
            })

        });
    }

    handleTextChange = (e) => {

        this.setState({
            content: e.target.value
        });

    }

    render() {
        return (
            <div className="container">
                <div className="col-3of10 bg-white">
                    <ProfilePad avatar={userAvatar}></ProfilePad>
                </div>
                <div className="col-3of5 bg-white">
                    <div className="tweet">
                        <form id="tweet-form">
                            <div className="row">
                                <img className="avatar-sm v-top" src={this.props.avatar} alt="avatar" />
                                <input className="input-tweet" placeholder="What's up?" id="tweet-content" value={this.state.content} onChange={this.handleTextChange}></input>
                            </div>
                            <div className="row tweet-actions">
                                <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                                <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                                <button className="btn-primary" type="button" id="post-btn" disabled={this.state.content? '' : 'disabled'}>Post</button>
                            </div>
                        </form>
                    </div>
                    <TweetList tweets={this.state.tweets}/>
                </div>
            </div>
        );
    }
}

export default Page;