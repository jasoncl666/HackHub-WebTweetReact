import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
// import moment from 'moment';

import Nav from './Nav'
import TweetList from './tweet/TweetList';
import ProfilePad from './ProfilePad';
import ProfileForm from './profile/ProfileForm';
import TweetPost from './tweet/TweetPost';
import Login from './auth/Login';
import Signup from './auth/Signup';



import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';
// import '../css/fontawesome-all.css';

// import userAvatar from '../img/spongebob.png';

class Page extends Component {

    constructor(props) {

        super(props)

        this.state = {
            tweets: [],
            username: '',
            token: '1'
        }

        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleTokenUpdate = this.handleTokenUpdate.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleTokenUpdate = (token) => {
        this.setState({
            token: token
        })
    }

    handleLogout = () => {
        this.setState({
            token: ''
        })
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

    render() {

        const {
            avatar
        } = this.props

        return (
            <div>
                <Nav logo={avatar} avatar={avatar}/>
                
                <div className="container">
                    <div className="col-3of5 bg-white">
                        {this.state.token && <TweetPost avatar={avatar} handleNewPost={this.handleNewPost} />}
                        <TweetList tweets={this.state.tweets}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;