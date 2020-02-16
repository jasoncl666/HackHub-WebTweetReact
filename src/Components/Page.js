import React, { Component } from 'react';
import Axios from 'axios';
import { baseUrl } from '../config';
// import moment from 'moment';

import Nav from './Nav'
import TweetList from './tweet/TweetList';
import ProfilePad from './ProfilePad';
import TweetPost from './tweet/TweetPost';
import LoginForm from './auth/LoginForm';



import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';
// import '../css/fontawesome-all.css';

// import userlogo from '../img/spongebob.png';

class Page extends Component {

    constructor(props) {

        super(props)

        this.state = {
            tweets: [],
            profile: props.profile,
            content: ""
        }

        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleTweetUpdate = this.handleTweetUpdate.bind(this);
        this.getTweets = this.getTweets.bind(this);
    }

    getTweets = () => {

        const that = this;

        console.log("Page Getting TWEETs")

        Axios.get(baseUrl+'/tweet')
        .then(res => {
            that.setState({
                tweets: res.data.tweets.sort((a, b) => a.createdAt < b.createdAt)
            })
        })
    }

    handleNewPost = (newPost) => {

        let tweets = this.state.tweets;

        tweets.unshift(newPost)

        this.setState({
            tweets: tweets
        })
    }

    /**
     * Loading tweets and profile when mounting this page
     */
    componentDidMount = () => {
        this.getTweets()
    }

    /** Delete User's own tweet when click on delete button 
     *  
     *  update state
     */
    handleTweetUpdate = () => {
        this.getTweets()
    }

    componentDidUpdate(){
        console.log("Page Update")
    }

    /**
     * test for token update and profile update
     */
    testUpdate = () => {
        console.log("Page Profile: ")
        console.log(this.state.profile)

        console.log("Page token: " + this.props.token)
    }

    
    render() {

        const {
            logo,
            handleLogout,
            handleTokenUpdate,
            handleProfileUpdate,
            token
        } = this.props

        const curUser = this.state.profile.username;
        const userAvatar = token? (this.state.profile.avatarUrl || 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/') : logo;



        return (
            <div>
                <Nav logo={logo} handleLogout={handleLogout} token={token} userAvatar={userAvatar} isInMainPAge={true}/>
                <div className="container">
                    <div className="col-3of10 bg-white">
                        {token && <ProfilePad profile={this.props.profile} token={token}/>}

                        {/* puttng LoginForm here will update profile in App, but wont update profile in Page's state
                            however, ref directly to this.props.profile works. don't know why */}
                        {!token && <LoginForm line={"Have an account?"} handleTokenUpdate={handleTokenUpdate} handleProfileUpdate={handleProfileUpdate} token={token} />}
                    </div>
                    <div className="col-3of5 bg-white">
                        {token && <TweetPost avatar={logo} handleNewPost={this.handleTweetUpdate}/>}
                        <TweetList tweets={this.state.tweets} token={token} curUser={curUser} handleTweetDelete={this.handleTweetUpdate}/>
                    </div>
                    <button onClick={this.testUpdate}> Test Update</button>
                </div>
            </div>
        )
    }
}

export default Page;