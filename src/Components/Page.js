import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import TweetList from './tweet/TweetList';
import TweetItem from './tweet/TweetItem';
import ProfilePad from './ProfilePad';
import TweetPost from './tweet/TweetPost'

import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';

import userAvatar from '../img/spongebob.png';

class Page extends Component {

    constructor(props) {

        super(props)

        this.state = {
            tweets: [],
            content: ''
        }

        this.handleNewPost = this.handleNewPost.bind(this)
    }
    
    // raw testing function for sending a new post
    // fow now authentication is not required
    handleNewPost = (newPost) => {

        let tweets = this.state.tweets;

        tweets.unshift({
            // createdAt: moment().defaultFormat(),
            createAt: '2018-06-10T15:37:29.033Z',
            author: {
                avatarUrl: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/',
                username: 'un-auth-User-1',
                name: 'unauth-U-1',
            },
            content: newPost,
            _id: Math.random().toString(36).substr(2, 9)
        })

        console.log(newPost)

        this.setState({
            tweets: tweets
        })
    }

    componentWillMount = () => {

        const that = this;

        Axios.get('https://tweet-api.webdxd.com/tweet')
        .then((response) => {

            that.setState({
                tweets: response.data.tweets
            })
        })
    }
 

    displayTweets = () => {
        console.log(this.state.tweets)
    }

    render() {

        // console.log(this.state.tweets);

        return (
            <div className="container">
                <div className="col-3of10 bg-white">
                    <ProfilePad avatar={userAvatar}></ProfilePad>
                </div>
                <div className="col-3of5 bg-white">
                    
                    <TweetPost avatar={this.props.avatar} handleNewPost={this.handleNewPost}/>
                    <TweetList tweets={this.state.tweets}/>
                    <button onClick={this.displayTweets}>Test</button>
                </div>
            </div>
        );
    }
}

export default Page;